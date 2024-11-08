import { deselectScripts } from 'astro/virtual-modules/transitions-swap-functions.js';
import { defineCollection, reference, z } from 'astro:content';

const services = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
        icon: image().optional(),
		title: z.string(),
        image: image(),
        excerpt: z.string(),
		progress: z.string(),
	}),
});

const faqs = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
		question: z.string(),
        answer: z.string(),
	}),
});


const stats = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
        icon: image().optional(),
		title: z.string(),
        count: z.string(),
	}),
});


const news = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image(),
	  imagealt: z.string(),
      tags: z.array(z.string()),
	  relatedblog: z.array(reference("news")).optional(),
	  author: z.string(reference('team')).optional(),
	  category: z.string().optional(),
    })
});

const portfolio = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image(),
	  imagealt: z.string(),
      tags: z.array(z.string()),
	  relatedblog: z.array(reference("news")).optional(),
	  filter: z.enum(['catWebDesign', 'catWebDevelopment', 'catAndroid', 'catiOS', 'catOther']).optional(),
	  category: z.string().optional(),
	  subcategories: z.array(z.string()),
    })
});

const policies = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
	  lastUpdated: z.date(),
      image: image(),
	  imagealt: z.string(),
    })
});

const iconwidgets = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      icon: image(),
    })
});

const imgwidgets = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      image: image(),
    })
});


const team = defineCollection ({
	type: "data",
	schema: ({image}) => z.object ({
		headshot: image(),
		name: z.string(),
		bio: z.string().optional(),
		role: z.string(),
		location: z.string().optional(),
		facebook: z.string().optional(),
		twitter: z.string().optional(),
		linkedin: z.string().optional(),
		github: z.string().optional(),
		tel: z.string().optional(),
		mail: z.string().optional(),
	}),
});

const clients = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
		headshot: image().optional(),
		clientname: z.string(),
		country: z.string().optional(),
		freelancer: z.string(reference('team')).optional(),
	}),
});

const companies = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
		companyname: z.string(),
		companylogo: image(),
	}),
});

const testimonials = defineCollection({
	type: "content",
    schema: ({image}) => 
	z.object({
		clientref: z.string(reference("clients")).optional(),
		message: z.string(),
		project: z.string().optional(),
		rating: z.string().optional(),
    }),
});

export const collections = {services, stats, companies, iconwidgets, imgwidgets, faqs, news, policies, portfolio, testimonials, team, clients};