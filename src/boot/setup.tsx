import { Spinner } from 'components';
import { SettingsProvider } from 'context/SettingsContext';
import i18n from 'i18n';
import React, { Component } from 'react';
import App from './App';

const initializeI18nAsync = async (): Promise<void> => {
    await i18n.init();
};

type state = {
    isLoadingComplete: boolean;
};

export default class Setup extends Component<any, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            isLoadingComplete: false,
        };
    }

    componentDidMount(): void {
        this._setUpDependenciesAsync();
    }

    componentDidCatch(error: any): void {
        console.warn(error);
    }

    _setUpDependenciesAsync = async (): Promise<void> => {
        await Promise.all([initializeI18nAsync()]);
        this.setState({ isLoadingComplete: true });
    };

    render(): React.ReactNode {
        const { isLoadingComplete } = this.state;

        if (!isLoadingComplete) {
            return <Spinner title="loading..." color="primary" />;
        }

        return (
            <SettingsProvider>
                <App />
            </SettingsProvider>
        );
    }
}
