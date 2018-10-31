export default {
    component: 'div',
    className: 'zlj-tool',
    children: [{
        component: 'div',
        className: 'zlj-tool-header',
        children: [{
            component: 'div',
            className: "{{'zlj-tool-header-left zlj-tool-header-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            children: [{
                component: 'img',
                className: 'zlj-tool-header-left-logo',
                src: 'logo.png'
            }, {
                component: 'span',
                className: 'zlj-tool-header-left-caption',
                children: 'Tools',
                _visible: '{{!data.isFoldMenu}}',
            }]
        }, {
            component: 'div',
            className: "zlj-tool-header-center",

        }, {
            component: 'div',
            className: "zlj-tool-header-right",
            children: {
                component: 'div',
                children: [
                    'Some tools collection developed by ',
                    {
                        component: 'a',
                        href: 'https://makajs.org',
                        children: 'maka.js'
                    }
                ]
            }
        }]
    }, {
        component: 'div',
        className: 'zlj-tool-content',
        children: [{
            component: 'div',
            className: "{{'zlj-tool-content-left zlj-tool-content-left-' + (data.isFoldMenu?'fold':'unfold') }}",
            style: "{{({overflow:data.isFoldMenu?'visible':'auto'})}}",
            children: [{
                component: 'antd.Menu',
                mode: 'vertical',
                theme: 'dark',
                className: 'zlj-tool-content-left-menu',
                inlineCollapsed: '{{data.isFoldMenu}}',
                selectedKeys: "{{$getMenuSelectKeys()}}",
                defaultOpenKeys: "{{data.menuDefaultOpenKeys}}",
                onClick: '{{$menuClick}}',
                children: '{{$getMenuChildren()}}'
            }, {
                component: 'div',
                className: 'zlj-tool-content-left-foldMenu',
                children: [{
                    component: 'antd.Icon',
                    type: `{{data.isFoldMenu ? 'double-right' :'double-left'}}`,
                    title: `{{data.isFoldMenu ? 'Open' :'Close'}}`,
                    style: { fontSize: 19 },
                    onClick: '{{$foldMenu}}'
                }]
            }]
        }, {
            component: 'div',
            className: 'zlj-tool-content-main',
            _visible: '{{!!(data.content && data.content.appName)}}',
            children: [{
                component: 'div',
                className: "zlj-tool-content-main-tabs",
                children: {
                    component: 'antd.Tabs',
                    type: "editable-card",
                    hideAdd: true,
                    activeKey: '{{data.content && data.content.appName}}',
                    onChange: '{{$tabChange}}',
                    onEdit: '{{$tabEdit}}',
                    children: [{
                        _for: 'item in data.openTabs',
                        component: 'antd.Tabs.TabPane',
                        key: `{{item.appName}}`,
                        tab: '{{item.title}}'
                    }],
                    _visible: '{{ data.isTabsStyle && data.openTabs && data.openTabs.length > 0}}',
                }
            }, {
                component: 'div',
                className: "zlj-tool-content-main-app",
                children: {
                    _for: 'item in data.openTabs',
                    component: 'AppLoader',
                    appName: '{{ item && item.appName }}',
                    setPortalContent: '{{$setContent}}',
                    '...': '{{item && item.appProps}}',
                    isTabStyle: '{{data.isTabsStyle}}',
                    _notRender: '{{ !(data.content && data.content.appName == item.appName) }}'
                }
            }]

        }]
    }]
}