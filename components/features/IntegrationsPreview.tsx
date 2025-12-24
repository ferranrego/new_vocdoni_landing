import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function IntegrationsPreview() {
  return (
    <Card className='w-48 p-4 space-y-2 bg-background/50 backdrop-blur-sm font-mono text-xs'>
      <div className='flex items-center gap-2'>
        <Badge variant='outline' className='text-[10px] px-1.5 py-0'>npm</Badge>
        <span className='text-muted-foreground'>install @vocdoni/sdk</span>
      </div>
      <div className='space-y-1 text-[10px]'>
        <div className='text-amber-600 dark:text-amber-400'>
          <span className='text-muted-foreground'>import</span> {'{ VocdoniSDK }'}
        </div>
        <div className='text-muted-foreground'>
          <span className='text-sky-600 dark:text-sky-400'>const</span> client = <span className='text-amber-600 dark:text-amber-400'>new</span> VocdoniSDK()
        </div>
        <div className='text-muted-foreground'>
          client.<span className='text-primary'>createElection</span>()
        </div>
      </div>
    </Card>
  )
}
