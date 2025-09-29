import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by{' '}
            <Link 
              href="https://aitoss.club/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:text-foreground transition-colors"
            >
              OSS
            </Link>
            {' '}and{' '}
            <Link 
              href="https://www.gdgaitpune.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:text-foreground transition-colors"
            >
              GDSC
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}