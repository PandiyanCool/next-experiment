import headerStyles from '../styles/Header.module.css'
import React from 'react'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Web Dev</span> News
            </h1>
            <p className={headerStyles.description}>Get latest web dev news here</p>
        </div>

    )
}

export default Header