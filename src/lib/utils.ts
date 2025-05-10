import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Page } from '@sveltejs/kit';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const urlParamStacker = (
	param: string,
	value: string,
	page: Page<Record<string, string>, string | null>
) => {
	const url = new URL(page.url);
	url.searchParams.set(param, value);
	return url.toString();
};

export const urlParamReducer = (
	param: string,
	page: Page<Record<string, string>, string | null>
) => {
	const searchParams = new URLSearchParams(page.url.searchParams);
	searchParams.delete(param);
	return searchParams;
};
