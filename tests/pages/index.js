export const menu = () => ({
	example: 'example',
	'example/[slug]': 'slug',
});

export const getProps = (pass) => {
	return { ...pass, menu: { message: 'index.js' } };
};

export default function home(props, selection) {
	try {
		switch (selection) {
			case 'example': {
				return { to: 'example' };
			}
			case 'slug': {
				return { to: 'example/test' };
			}
		}

		return { to: '404' };
	} catch (error) {
		return { to: '500', pass: { error } };
	}
}
