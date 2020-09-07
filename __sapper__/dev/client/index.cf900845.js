import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as attr_dev, h as add_location, j as insert_dev, n as noop } from './client.f90f3399.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			t = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-xuz2ac\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
			this.h();
		},
		h: function hydrate() {
			document.title = "Run Rent Rehab";
			attr_dev(img, "alt", "Run Rent Rehab Banner");
			if (img.src !== (img_src_value = "banner.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1dv95y2");
			add_location(img, file, 37, 0, 415);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, img, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2Y5MDA4NDUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
