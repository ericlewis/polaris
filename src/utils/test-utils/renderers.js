import React from 'react';
import { render } from './testing-library';
import { UIProvider } from 'store/ui/context';
import Route from 'components/templates/route';

const _convertToRoute = (
  View,
  { path = '/test-path', name = 'Test path', defaultPath, additionalRoutes = [] } = {}
) => {
  const route = { path, View, name };
  const routes = [route, ...additionalRoutes];
  return props => <Route defaultPath={defaultPath || path} routes={routes} {...props} />;
};

export const renderWithContext = (Component, renderOptions = {}) => {
  return render(<Component />, { ...renderOptions, wrapper: UIProvider });
};

export const renderAsRoute = (Component, { renderOptions = {}, routeOptions } = {}) => {
  const RouteComponent = _convertToRoute(Component, routeOptions);
  return render(<RouteComponent />, { ...renderOptions, wrapper: UIProvider });
};