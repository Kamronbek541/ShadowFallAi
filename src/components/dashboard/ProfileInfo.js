// src/components/dashboard/ProfileInfo.js
import React from 'react';
import styles from './ProfileInfo.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const ProfileInfo = () => (
  <div className={styles.card}>
    <h4>Profile Information</h4>
    <p className={styles.bio}>Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
    <hr className={styles.divider} />
    <p><strong>Full Name:</strong> Alec M. Thompson</p>
    <p><strong>Mobile:</strong> (44) 123 1234 123</p>
    <p><strong>Email:</strong> alethompson@mail.com</p>
    <p><strong>Location:</strong> United States</p>
    <div className={styles.socials}>
      <strong>Social Media:</strong>
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
    </div>
  </div>
);
export default ProfileInfo;