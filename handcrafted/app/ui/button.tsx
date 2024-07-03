import clsx from 'clsx';
import styles from '@/app/ui/home.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `${styles.banner} flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors hover:${styles.hover} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:${styles.hover} active:${styles.hover} aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        className,
      )}
    >
      {children}
    </button>
  );
}
