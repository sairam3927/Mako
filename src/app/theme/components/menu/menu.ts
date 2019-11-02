import { Menu } from './menu.model';
// import { conditionalhorizontalMenuItems } from 'src/app/login/login.service';

export const verticalMenuItems = [

]

// export const horizontalMenuItems = [
//     new Menu(1, 'Dashboard', '/mako/dashboard', null, 'dashboard', null, false, 0, "blue",false),
//     new Menu(2, 'QC', '/mako/qc', null, 'dashboard', null, false, 0, "blue",false),
//     new Menu(3, 'Orders', '/mako/patients/incomingorders', null, 'description', null, false, 0, "blue",false),
//     new Menu(4, 'Raw Data', '/mako/reports', null, 'assignment', null, true, 0, "blue",false),
//     new Menu(5, 'Setup', '/mako/billing', null, 'blur_on', null, true, 0, "black",false),
//     new Menu(6, 'Admin', '/mako/admin', null, 'person', null, true, 0, "blue",false),
//     new Menu(7, 'Users', '/mako/admin/users', null, 'group_add', null, false, 6, "white",false),
//     new Menu(8, 'Settings', '/mako/admin/settings', null, 'settings', null, false, 6, "white",false),
// ]

var conditionalhorizontalMenuItems = [];

var DashboardReadPermission: any;
var QCReadPermission: any;
var OrdersReadPermission: any;
var RawDataReadPermission: any;
var SetUpReadPermission: any;
var AdminReadPermission: any;
var UsersReadPermission: any;
var SettingsReadPermission: any;

let getPermissions = JSON.parse(localStorage.getItem('Permissions'));
// console.log('Permissions: ', getPermissions);

if (getPermissions) {
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Dashboard') {
            DashboardReadPermission = getPermissions[i]['Read']
            if (DashboardReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(1, 'Dashboard', '/mako/dashboard', null, 'dashboard', null, false, 0, "black"))
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'QC') {
            QCReadPermission = getPermissions[i]['Read']
            if (QCReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(2, 'QC', '/mako/qc', null, 'dashboard', null, false, 0, "black"))
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Orders') {
            OrdersReadPermission = getPermissions[i]['Read']
            if (OrdersReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(3, 'Orders', '/mako/patients/incomingorders', null, 'description', null, false, 0, "black"))
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Raw Data') {
            RawDataReadPermission = getPermissions[i]['Read']
            if (RawDataReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(4, 'Raw Data', '/mako/reports', null, 'assignment', null, true, 0, "black"))
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Set Up') {
            SetUpReadPermission = getPermissions[i]['Read']
            if (SetUpReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(5, 'Setup', '/mako/billing', null, 'blur_on', null, true, 0, "black"))
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Admin') {
            console.log(getPermissions[i],'admin');
            AdminReadPermission = getPermissions[i]['Read']
            if (AdminReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(6, 'Admin', '/mako/admin', null, 'person', null, true, 0, "black"),)
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Users') {
            UsersReadPermission = getPermissions[i]['Read']
            if (UsersReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(7, 'Users', '/mako/admin/users', null, 'group_add', null, false, 6, "white"),)
            }
        }
    }
    for (let i = 0; i < getPermissions.length; i++) {
        let ScreenName = getPermissions[i]['ScreenName']
        if (ScreenName == 'Settings') {
            SettingsReadPermission = getPermissions[i]['Read']
            if (SettingsReadPermission == true){
                conditionalhorizontalMenuItems.push(new Menu(8, 'Settings', '/mako/admin/settings', null, 'settings', null, false, 6, "white"),)
            }
        }
    }

}

export const horizontalMenuItems = conditionalhorizontalMenuItems;
