import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { logoGray } from 'config';
import i18n from 'i18n';
import { getLangugage } from 'utils/localStorage';
import { useStyle } from './footer.style';

const setLanguage = async (language) => {
    await i18n.init(language);
    window.location.reload(false);
};

export const Footer = () => {
    const classes = useStyle();
    const [lang, setLang] = useState(getLangugage());
    const appStoreUrl = 'https://itunes.apple.com/us/app/{yourdomain}-latest-jobs/id1472058664';
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.mediusoft.{yourdomain}';

    return (
        <footer className={classes.container}>
            <div className={classes.topSection}>
                <div className={classes.content}>
                    <div className={classes.topSectionContent}>
                        <div className={classes.topLeftSide}>
                            <img style={{ width: '100px' }} src={logoGray} alt="{Yourdomain} logo" />
                        </div>
                        <div className={classes.topRightSide}>
                            <Select
                                value={lang}
                                classes={{ select: classes.select, icon: classes.selectIcon }}
                                onChange={async (event: any): Promise<void> => {
                                    await setLanguage(event.target.value);
                                    setLang(event.target.value);
                                }}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="az">Azərbaycanca</MenuItem>
                                <MenuItem value="ru">Русский</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.middleSection}>
                <div className={classes.content}>
                    <div className={classes.middleSectionContent}>
                        <div className={classes.middleLeftSide} />
                        <div className={classes.middleRightSide}>
                            <a
                                href={appStoreUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={classes.appStoreIcon}
                            >
                                <img src={require('./components/app-store.svg')} alt="App store" />
                            </a>
                            <a
                                href={playStoreUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={classes.playStoreIcon}
                            >
                                <img src={require('./components/google-play.svg')} alt="Play store" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomSection}>
                <div className={classes.content}>
                    <div className={classes.bottomSectionContent}>
                        <p>
                            © 2020 <strong style={{ color: 'white' }}>Medius Software</strong>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
