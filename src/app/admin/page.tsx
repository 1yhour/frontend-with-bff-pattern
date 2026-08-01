"use client";

import React from 'react';
import styles from './admin.module.css';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Bell, 
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  CreditCard,
  LogOut
} from 'lucide-react';

export default function AdminPage() {
  return (
    <div className={styles.adminContainer}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <LayoutDashboard size={28} />
          <span>AdminPro</span>
        </div>
        
        <ul className={styles.navMenu}>
          <li>
            <a href="#" className={`${styles.navItem} ${styles.active}`}>
              <LayoutDashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem}>
              <Users />
              Users
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem}>
              <BarChart3 />
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem}>
              <CreditCard />
              Billing
            </a>
          </li>
          <li style={{ marginTop: 'auto' }}>
            <a href="#" className={styles.navItem}>
              <Settings />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem} style={{ color: '#f87171' }}>
              <LogOut />
              Logout
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Top Header */}
        <header className={styles.header}>
          <div className={styles.headerTitle}>Dashboard Overview</div>
          <div className={styles.userProfile}>
            <Bell className={styles.navItem} style={{ padding: '8px' }} />
            <div className={styles.avatar}>A</div>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <div className={styles.dashboardGrid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay1}`}>
            <div className={styles.cardHeader}>
              Total Revenue
              <div className={styles.cardIcon}>
                <CreditCard size={20} />
              </div>
            </div>
            <div className={styles.cardValue}>$45,231.89</div>
            <div className={`${styles.cardTrend} ${styles.trendUp}`}>
              <ArrowUpRight size={16} />
              <span>+20.1% from last month</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay2}`}>
            <div className={styles.cardHeader}>
              Active Users
              <div className={styles.cardIcon}>
                <Users size={20} />
              </div>
            </div>
            <div className={styles.cardValue}>2,350</div>
            <div className={`${styles.cardTrend} ${styles.trendUp}`}>
              <ArrowUpRight size={16} />
              <span>+180 new today</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay3}`}>
            <div className={styles.cardHeader}>
              Active Sessions
              <div className={styles.cardIcon}>
                <Activity size={20} />
              </div>
            </div>
            <div className={styles.cardValue}>+12,234</div>
            <div className={`${styles.cardTrend} ${styles.trendDown}`}>
              <ArrowDownRight size={16} />
              <span>-4.5% since yesterday</span>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className={`${styles.recentActivitySection} ${styles.animateFadeIn} ${styles.delay4}`}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className={styles.avatar} style={{ width: '32px', height: '32px', fontSize: '0.8rem', background: '#3b82f6' }}>O</div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#f1f5f9' }}>Olivia Martin</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>olivia.martin@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Logged In</td>
                  <td>Oct 24, 2026</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusSuccess}`}>Success</span></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className={styles.avatar} style={{ width: '32px', height: '32px', fontSize: '0.8rem', background: '#10b981' }}>J</div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#f1f5f9' }}>Jackson Lee</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>jackson.lee@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Password Reset</td>
                  <td>Oct 23, 2026</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusPending}`}>Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className={styles.avatar} style={{ width: '32px', height: '32px', fontSize: '0.8rem', background: '#8b5cf6' }}>I</div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#f1f5f9' }}>Isabella Nguyen</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>isabella.nguyen@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Failed Login</td>
                  <td>Oct 22, 2026</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusFailed}`}>Failed</span></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className={styles.avatar} style={{ width: '32px', height: '32px', fontSize: '0.8rem', background: '#f59e0b' }}>W</div>
                      <div>
                        <div style={{ fontWeight: 500, color: '#f1f5f9' }}>William Kim</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>will@email.com</div>
                      </div>
                    </div>
                  </td>
                  <td>Updated Profile</td>
                  <td>Oct 21, 2026</td>
                  <td><span className={`${styles.statusBadge} ${styles.statusSuccess}`}>Success</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}