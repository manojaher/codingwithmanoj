import React from 'react';
import Home from '../pages/home/Home';
import Blogs from '../pages/blog/Blogs';
import Tags from '../pages/tags/Tags';
import TagsPage from '../pages/tags/tagsPage/TagsPage';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';

const routes = [
  { path: '/', element: <Home />, name: 'Home' },
  { path: '/blogs', element: <Blogs />, name: 'Blogs' },
  { path: '/tags', element: <Tags />, name: 'Tags' },
  { path: '/tags/:id', element: <TagsPage />, name: 'TagsPage', hidden: true },
  { path: '/courses', element: <Courses />, name: 'Courses' },
  { path: '/contact', element: <Contact />, name: 'Contact' },
];

export default routes;
