export const routePaths = {
  home: (): string => '/',
  catalog: (): string => '/catalog',
  camper: (id: string = ':id'): string => `/catalog/${id}`,
};
