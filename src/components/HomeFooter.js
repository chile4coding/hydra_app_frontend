import React from 'react'
import classes from './Footer.module.css'

export default function HomeFooter() {
  return (
    <div className={classes['foorter__container']}>
        <div className={classes['foorter__item']}>
            <p>Privacy policy</p>
            <p>Terms of service</p>
        </div>
        <div className={classes['foorter__item']}>
            <p>Accessibility</p>
            <p>Ads info</p>
            <p>Cookies</p>
            <p>More</p>
        </div>
        <div className={classes['foorter__item']}>
            <p>HydraApp © 2023</p>
        </div>
    </div>
  )
}
