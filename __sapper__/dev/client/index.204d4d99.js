import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.057bcff6.js';

/* src/routes/index.svelte generated by Svelte v3.24.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let img;
	let img_src_value;
	let t1;
	let div;
	let h20;
	let t2;
	let em0;
	let t3;
	let t4;
	let p0;
	let t5;
	let t6;
	let h21;
	let t7;
	let em1;
	let t8;
	let t9;
	let p1;
	let t10;
	let t11;
	let h22;
	let t12;
	let em2;
	let t13;
	let t14;
	let p2;
	let t15;
	let t16;
	let h23;
	let t17;
	let em3;
	let t18;
	let t19;
	let p3;
	let t20;
	let t21;
	let hr;
	let t22;
	let p4;
	let t23;

	const block = {
		c: function create() {
			t0 = space();
			img = element("img");
			t1 = space();
			div = element("div");
			h20 = element("h2");
			t2 = text("Run ");
			em0 = element("em");
			t3 = text("(verb)");
			t4 = space();
			p0 = element("p");
			t5 = text("To move at a speed faster than a walk, never having both or all the feet on the ground at the same time.");
			t6 = space();
			h21 = element("h2");
			t7 = text("Rent ");
			em1 = element("em");
			t8 = text("(noun)");
			t9 = space();
			p1 = element("p");
			t10 = text("A tenant's regular payment to a landlord for the use of property or land.");
			t11 = space();
			h22 = element("h2");
			t12 = text("Rehab ");
			em2 = element("em");
			t13 = text("(verb)");
			t14 = space();
			p2 = element("p");
			t15 = text("To rehabilitate or restore");
			t16 = space();
			h23 = element("h2");
			t17 = text("Run~Rent~Rehab ");
			em3 = element("em");
			t18 = text("(noun)");
			t19 = space();
			p3 = element("p");
			t20 = text("A virtual place where I get to share my passions; through tips, tricks, stories, and DIY tutorials. I love to restore life to older/used items (specifically houses), that I can then turn into long term rentals. When I'm not too busy with real estate, I love to feel the wind in my hair running outside.");
			t21 = space();
			hr = element("hr");
			t22 = space();
			p4 = element("p");
			t23 = text("Thanks for visiting my page, and I'm excited to share these parts of my life with you!");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-xuz2ac\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h20 = claim_element(div_nodes, "H2", {});
			var h20_nodes = children(h20);
			t2 = claim_text(h20_nodes, "Run ");
			em0 = claim_element(h20_nodes, "EM", {});
			var em0_nodes = children(em0);
			t3 = claim_text(em0_nodes, "(verb)");
			em0_nodes.forEach(detach_dev);
			h20_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "To move at a speed faster than a walk, never having both or all the feet on the ground at the same time.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			h21 = claim_element(div_nodes, "H2", {});
			var h21_nodes = children(h21);
			t7 = claim_text(h21_nodes, "Rent ");
			em1 = claim_element(h21_nodes, "EM", {});
			var em1_nodes = children(em1);
			t8 = claim_text(em1_nodes, "(noun)");
			em1_nodes.forEach(detach_dev);
			h21_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t10 = claim_text(p1_nodes, "A tenant's regular payment to a landlord for the use of property or land.");
			p1_nodes.forEach(detach_dev);
			t11 = claim_space(div_nodes);
			h22 = claim_element(div_nodes, "H2", {});
			var h22_nodes = children(h22);
			t12 = claim_text(h22_nodes, "Rehab ");
			em2 = claim_element(h22_nodes, "EM", {});
			var em2_nodes = children(em2);
			t13 = claim_text(em2_nodes, "(verb)");
			em2_nodes.forEach(detach_dev);
			h22_nodes.forEach(detach_dev);
			t14 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t15 = claim_text(p2_nodes, "To rehabilitate or restore");
			p2_nodes.forEach(detach_dev);
			t16 = claim_space(div_nodes);
			h23 = claim_element(div_nodes, "H2", {});
			var h23_nodes = children(h23);
			t17 = claim_text(h23_nodes, "Run~Rent~Rehab ");
			em3 = claim_element(h23_nodes, "EM", {});
			var em3_nodes = children(em3);
			t18 = claim_text(em3_nodes, "(noun)");
			em3_nodes.forEach(detach_dev);
			h23_nodes.forEach(detach_dev);
			t19 = claim_space(div_nodes);
			p3 = claim_element(div_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t20 = claim_text(p3_nodes, "A virtual place where I get to share my passions; through tips, tricks, stories, and DIY tutorials. I love to restore life to older/used items (specifically houses), that I can then turn into long term rentals. When I'm not too busy with real estate, I love to feel the wind in my hair running outside.");
			p3_nodes.forEach(detach_dev);
			t21 = claim_space(div_nodes);
			hr = claim_element(div_nodes, "HR", {});
			t22 = claim_space(div_nodes);
			p4 = claim_element(div_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t23 = claim_text(p4_nodes, "Thanks for visiting my page, and I'm excited to share these parts of my life with you!");
			p4_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Run Rent Rehab";
			attr_dev(img, "alt", "Run Rent Rehab Banner");
			if (img.src !== (img_src_value = "banner.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-7fdryi");
			add_location(img, file, 28, 0, 319);
			add_location(em0, file, 31, 9, 386);
			add_location(h20, file, 31, 1, 378);
			attr_dev(p0, "class", "svelte-7fdryi");
			add_location(p0, file, 32, 1, 408);
			add_location(em1, file, 33, 10, 530);
			add_location(h21, file, 33, 1, 521);
			attr_dev(p1, "class", "svelte-7fdryi");
			add_location(p1, file, 34, 1, 552);
			add_location(em2, file, 35, 11, 644);
			add_location(h22, file, 35, 1, 634);
			attr_dev(p2, "class", "svelte-7fdryi");
			add_location(p2, file, 36, 1, 666);
			add_location(em3, file, 37, 20, 720);
			add_location(h23, file, 37, 1, 701);
			attr_dev(p3, "class", "svelte-7fdryi");
			add_location(p3, file, 38, 1, 742);
			add_location(hr, file, 39, 1, 1053);
			attr_dev(p4, "class", "svelte-7fdryi");
			add_location(p4, file, 40, 1, 1059);
			add_location(div, file, 30, 0, 371);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h20);
			append_dev(h20, t2);
			append_dev(h20, em0);
			append_dev(em0, t3);
			append_dev(div, t4);
			append_dev(div, p0);
			append_dev(p0, t5);
			append_dev(div, t6);
			append_dev(div, h21);
			append_dev(h21, t7);
			append_dev(h21, em1);
			append_dev(em1, t8);
			append_dev(div, t9);
			append_dev(div, p1);
			append_dev(p1, t10);
			append_dev(div, t11);
			append_dev(div, h22);
			append_dev(h22, t12);
			append_dev(h22, em2);
			append_dev(em2, t13);
			append_dev(div, t14);
			append_dev(div, p2);
			append_dev(p2, t15);
			append_dev(div, t16);
			append_dev(div, h23);
			append_dev(h23, t17);
			append_dev(h23, em3);
			append_dev(em3, t18);
			append_dev(div, t19);
			append_dev(div, p3);
			append_dev(p3, t20);
			append_dev(div, t21);
			append_dev(div, hr);
			append_dev(div, t22);
			append_dev(div, p4);
			append_dev(p4, t23);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjA0ZDRkOTkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
