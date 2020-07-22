/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, createContext } from 'react';
import { useLocalStorage } from 'react-use';
import { isEmpty } from 'utils/validationHelper';

const USER_KEY = '@Auth/user';
const ACCESS_TOKEN_KEY = '@Auth/accessToken';

export const getAccessToken = (): string | null => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if ([null, undefined, 'null', 'undefined'].includes(accessToken)) {
        return null;
    }

    try {
        return JSON.parse(accessToken as string);
    } catch (_) {
        return accessToken;
    }
};

type AuthUserProps =
    | {
          email?: string;
          role?: string;
          firstName?: string;
          lastName?: string;
      }
    | null
    | undefined;

type AuthContextProps = {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    selectedTab: number;
    selectTab: any;
    isLoggedIn: boolean;
    isEmployer: boolean;
    user: AuthUserProps;
    email: string;
    setEmail: any;
    saveAuthData: (authData: any) => void;
    removeAuthData: () => void;
};

const AuthContext = createContext<AuthContextProps>({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
    selectedTab: 0,
    selectTab: () => {},
    isLoggedIn: false,
    isEmployer: false,
    user: {},
    email: '',
    setEmail: () => {},
    saveAuthData: () => {},
    removeAuthData: () => {},
});
export const useAuth = (): AuthContextProps => useContext<AuthContextProps>(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useLocalStorage(ACCESS_TOKEN_KEY, null, {
        raw: true,
    });
    const [user, setUser] = useLocalStorage<AuthUserProps>(USER_KEY, null);
    const [email, setEmail] = useState('');
    const isLoggedIn = !isEmpty(accessToken) && !!user;
    const isEmployer = user?.role === 'employer';

    const saveAuthData = (authData): void => {
        setAccessToken(authData.accessToken);

        const normalizedUser: AuthUserProps = {
            firstName: authData?.user[authData.user.role].firstName,
            lastName: authData?.user[authData.user.role].lastName,
            email: authData?.user.email,
            role: authData?.user.role,
        };
        setUser(normalizedUser);
    };

    const removeAuthData = (): void => {
        setAccessToken(null);
        setUser(null);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTab, selectTab] = useState(0);
    const openModal = (): void => setIsModalOpen(true);
    const closeModal = (): void => {
        setIsModalOpen(false);
        setEmail('');
    };

    return (
        <AuthContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
                selectedTab,
                selectTab,
                isLoggedIn,
                isEmployer,
                user,
                email,
                setEmail,
                saveAuthData,
                removeAuthData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
