type FormDataObj = import('svelte/store').Writable<Record<string, FormDataEntryValue>>;

type CallbackResult = { isError: boolean; message: string };
type SubmitHandler = (event: SubmitEvent, formDataObj: FormDataObj) => Promise<CallbackResult>;
type CallbackArray = SubmitHandler[];

interface FormContext {
	formId: string;
	isCollapsed: import('svelte/store').Writable<boolean>;
	reqIndicator: string;
	callbackArray: CallbackArray;
	formDataObj: FormDataObj;
	hasRequired: import('svelte/store').Writable<boolean>;
}

type FormState = 'awaitUser' | 'pending' | 'success' | 'fail';

type InputTypes = 'text' | 'email' | 'url' | 'tel' | 'search' | 'password' | 'hidden';
