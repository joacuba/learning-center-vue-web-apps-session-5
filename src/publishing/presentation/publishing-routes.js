// Lazy-loaded components
const categoryList = () => import('./views/category-list.vue');
const categoryForm = () => import('./views/category-form.vue');
const tutorialList = () => import('./views/tutorial-list.vue');
const tutorialForm = () => import('./views/tutorial-form.vue');

const publishingRoutes = [
    { path: 'categories', name: 'publishing-categories', component: categoryList, meta: { title: "Categories" } },
    { path: 'categories/new', name: 'publishing-categories-new', component: categoryForm, meta: { title: "New Category" } },
    { path: 'categories/:id/edit', name: 'publishing-categories-edit', component: categoryForm, meta: { title: "Edit Category" } },
    { path: 'tutorials', name: 'publishing-tutorials', component: tutorialList, meta: { title: "Tutorials" } },
    { path: 'tutorials/new', name: 'publishing-tutorials-new', component: tutorialForm, meta: { title: "New Tutorial" } },
    { path: 'tutorials/:id/edit', name: 'publishing-tutorials-edit', component: tutorialForm, meta: { title: "Edit Tutorial" } },
];

export default publishingRoutes;