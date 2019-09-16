import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    new Menu(1, 'Analytics', '/salesglobal/analytics', null, 'assessment', null, true, 0, "black"),
    new Menu(2, 'Marketing', '/salesglobal/marketing', null, 'device_hub', null, true, 0, "black"),
    new Menu(3, 'Sales', '/salesglobal/sales', null, 'business_center', null, true, 0, "black"),
    new Menu(17, 'Referral', '/salesglobal/referral', null, 'gradient', null, true, 0, "black"),
    new Menu(18, 'Calendar', '/salesglobal/calender', null, 'today', null, true, 0, "black"),
    new Menu(4, 'Admin', '/salesglobal/admin', null, 'person', null, true, 0, "black"),

    new Menu(5, 'Dashboard', '/salesglobal/analytics/dashboard', null, 'dashboard', null, false, 1, "black"),
    new Menu(6, 'Task Manager', '/salesglobal/analytics/taskmanager', null, 'list', null, false, 1, "black"),

    new Menu(7, 'Kanban', '/salesglobal/admin/steps', null, 'swap_horiz', null, false, 4, "black"),
    new Menu(8, 'Lookup', '/salesglobal/admin/lookup', null, 'zoom_in', null, false, 4, "black"),
    new Menu(9, 'Settings', '/salesglobal/admin/settings', null, 'settings_applications', null, false, 4, "black"),
    new Menu(10, 'Users', '/salesglobal/admin/users', null, 'group_add', null, false, 4, "black"),

    new Menu(11, 'Campaigns', '/salesglobal/marketing/campaigns', null, 'public', null, false, 2, "black"),
    new Menu(12, 'Leads', '/salesglobal/marketing/leads', null, 'group', null, false, 2, "black"),
    new Menu(13, 'Prospects', '/salesglobal/marketing/prospects', null, 'outlined_flag', null, false, 2, "black"),

    new Menu(14, 'Accounts', '/salesglobal/sales/accounts', null, 'monetization_on', null, false, 3, "black"),
    new Menu(15, 'Contacts', '/salesglobal/marketing/contacts', null, 'contacts', null, false, 2, "black"),
    new Menu(16, 'Opportunities', '/salesglobal/sales/opportunities', null, 'highlight', null, false, 3, "black"),
    new Menu(17, 'Checklist', '/salesglobal/admin/checklist', null, 'check_circle', null, false, 4, "black"),
    new Menu(18, 'Color Code', '/salesglobal/admin/colorcode', null, 'format_color_fill', null, false,4,"black"),
    new Menu(19,'Location', '/salesglobal/admin/location', null,'edit_location', null, false, 4,"black"),
    new Menu(20, 'Time Zones', '/salesglobal/admin/timezone', null, 'access_time', null, false,4,"black"),
]

export const horizontalMenuItems = [
    new Menu(1, 'Dashboard', '/mako/dashboard', null, 'dashboard', null, false, 0, "black"),
    new Menu(2, 'Orders', '/mako/patients/incomingorders', null, 'description', null, false, 0, "black"),
    new Menu(3, 'Raw Data', '/mako/reports', null, 'assignment', null, true, 0, "black"),
    new Menu(4, 'Set Up', '/mako/billing', null, 'blur_on', null, true, 0, "black"),
    new Menu(5, 'Admin', '/mako/admin', null, 'person', null, true, 0, "black"),
    new Menu(6, 'Users', '/mako/admin/users', null, 'group_add', null, false, 5, "black"),
    new Menu(7, 'Settings', '/mako/admin/settings', null, 'settings', null, false, 5, "black"),
]
