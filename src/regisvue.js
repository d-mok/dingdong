
function getComponents(context) {
    function parse(fileName) {
        fileName = fileName.split('/').pop().replace(/\.\w+$/, '');
        return _.upperFirst(_.camelCase(fileName));
    }
    return context.keys().map(fileName => {
        let component = context(fileName);
        component = component.default || component;
        const componentName = parse(fileName);
        return { componentName, component };
    });
}


globalThis.registerVueComponents = function (vue, context) {
    getComponents(context).forEach(c => {
        vue.component(c.componentName, c.component);
    });
};

globalThis.registerVueRoutes = function (context) {
    return getComponents(context).map(c => ({
        path: '/' + c.componentName.toLowerCase(),
        name: c.componentName.toLowerCase(),
        component: c.component
    }));
};
