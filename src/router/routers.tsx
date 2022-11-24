import DataScreen from '../views/cloud/data';
import { RouteObject } from 'react-router-dom';
import ArticleScreen from '../views/cloud/article';
import HomeScreen from '../views/home';

const routers: RouteObject[] = [
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/cloud-data',
    element: <DataScreen />
  },
  {
    path: '/cloud-aritcle',
    element: <ArticleScreen />
  },
]

export default routers