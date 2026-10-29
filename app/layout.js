export const metadata = {
  title: 'Church Presenter',
  description: 'Multi-view worship presentation application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
