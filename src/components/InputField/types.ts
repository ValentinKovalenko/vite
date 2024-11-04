export interface InputFieldProps {
    label?: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    validate?: (value: string) => boolean;
    autoFocus?: boolean;
}