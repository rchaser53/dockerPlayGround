declare module "redux-tower"
{ 
	export var createHashHistory;
	export var createBrowserHistory;
	export var saga;
	export var reducer;
	export interface createBrowserHistory{}
	export interface createHashHistory{}
	export type saga = any; 
	export interface reducer{}
	export interface actions{}
	export interface CANCEL{} 
	export interface ERROR{}
	export interface INITIAL{}
}

declare module "redux-tower/lib/react" {
	export var Router;
}

declare module 'react-addons-test-utils'
