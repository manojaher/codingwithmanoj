import React from 'react';
import Home from '../pages/home/Home';
import Blogs from '../pages/blog/Blogs';
import Tags from '../pages/tags/Tags';
import TagsPage from '../pages/tags/tagsPage/TagsPage';
import Contact from '../pages/contact/Contact';
import Courses from '../pages/courses/Courses';
import { NavBarStrings } from '@/strings/navbar/Constants';

const routes = [
  { path: '/', element: <Home />, name: NavBarStrings.page_home },
  { path: '/blogs', element: <Blogs />, name: NavBarStrings.page_blogs },
  { path: '/tags', element: <Tags />, name: NavBarStrings.page_tags },
  {
    path: '/tags/:id',
    element: <TagsPage />,
    name: NavBarStrings.page_tagPage,
    hidden: true,
  },
  { path: '/courses', element: <Courses />, name: NavBarStrings.page_courses },
  { path: '/contact', element: <Contact />, name: NavBarStrings.page_contact },
];

export default routes;
