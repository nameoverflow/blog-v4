import React from 'react'

if (typeof window !== 'undefined') {
    require('./LoadingAnimation.sass')
}
export default () =>
    <div className="LoadingAnimation">
        <div />
        <div />
        <div />
    </div>