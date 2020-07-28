
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

// register vue components, use like:
// const vueComponents = require.context('@/components', true, /[A-Z]\w+\.(vue|js)$/);
// registerVueComponents(Vue, vueComponents);
globalThis.registerVueComponents = function (vue, context) {
    getComponents(context).forEach(c => {
        vue.component(c.componentName, c.component);
    });
};

// return a routes object, use like:
// const routeComponents = require.context('@/pages', true, /[A-Z]\w+\.(vue|js)$/);
// const routes = registerVueRoutes(routeComponents);
globalThis.registerVueRoutes = function (context) {
    return getComponents(context).map(c => ({
        path: '/' + c.componentName.toLowerCase(),
        name: c.componentName.toLowerCase(),
        component: c.component
    }));
};
