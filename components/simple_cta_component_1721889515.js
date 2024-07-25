/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1721889515", {
    template: `
    <div>
        <nav class="bg-gray-800 p-4">
            <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:text-gray-300">Home</a>
                    <a href="#" class="text-white hover:text-gray-300">About</a>
                    <a href="#" class="text-white hover:text-gray-300">Contact Us</a>
                </div>
            </div>
        </nav>
        <nav class="bg-gray-800 p-4">
            <div class="max-w-screen-xl mx-auto flex justify-between items-center">
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:text-gray-300">Home</a>
                    <a href="#" class="text-white hover:text-gray-300">About</a>
                    <a href="#" class="text-white hover:text-gray-300">Contact Us</a>
                </div>
            </div>
        </nav>
        <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Discover Innovative Products</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Explore a world of cutting-edge products and stay ahead of the curve.</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Find New Products</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `,
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
