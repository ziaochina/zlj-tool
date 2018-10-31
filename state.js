const menu = [{
    key: '1',
    title: 'Json',
    appName: 'zlj-tool-json',
    appProps: {},
    icon: 'smile',
    isDefault: true
},{
    key: '2',
    title: 'Markdown',
    appName: 'zlj-tool-markdown',
    appProps: {},
    icon: 'smile'
}]

export default {
    data: {
        menu,
        menuSelectedKeys: [],
        menuDefaultOpenKeys: [],
        content: { },
        openTabs: [],
        isTabsStyle: true,
        isFoldMenu: false,
        other: {}
    }
}