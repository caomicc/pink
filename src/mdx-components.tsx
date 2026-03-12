import type { MDXComponents } from 'mdx/types';
import { cn } from '@/lib/utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings - using design system tokens
    h1: ({ className, ...props }) => (
      <h1
        className={cn('mt-8 mb-4 scroll-m-20', className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn('mt-10 mb-4 scroll-m-20', className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn('mt-8 mb-4 scroll-m-20', className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn('mt-6 mb-4 scroll-m-20', className)}
        {...props}
      />
    ),

    // Paragraphs and text
    p: ({ className, ...props }) => (
      <p className={cn(className)} {...props} />
    ),
    strong: ({ className, ...props }) => (
      <strong className={cn(className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn(className)} {...props} />
    ),

    // Links
    a: ({ className, ...props }) => (
      <a className={cn(className)} {...props} />
    ),

    // Lists
    ul: ({ className, ...props }) => (
      <ul className={cn(className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn(className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn(className)} {...props} />
    ),

    // Blockquote
    blockquote: ({ className, ...props }) => (
      <blockquote className={cn(className)} {...props} />
    ),

    // Code
    code: ({ className, ...props }) => (
      <code className={cn(className)} {...props} />
    ),
    pre: ({ className, ...props }) => (
      <pre className={cn(className)} {...props} />
    ),

    // Table
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn(className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className={cn(className)} {...props} />
    ),
    td: ({ className, ...props }) => (
      <td className={cn(className)} {...props} />
    ),

    // Horizontal rule
    hr: ({ ...props }) => <hr {...props} />,

    // Image
    img: ({ className, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className={cn(className)} alt={alt} {...props} />
    ),

    ...components,
  };
}
