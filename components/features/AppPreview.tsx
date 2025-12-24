import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AppPreview() {
  return (
    <Card className='w-48 p-4 space-y-3 bg-background/50 backdrop-blur-sm'>
      <div className='space-y-2'>
        <div className='flex items-center gap-2 text-sm'>
          <CheckCircle2 className='size-4 text-primary' />
          <span className='text-muted-foreground'>Option A</span>
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <CheckCircle2 className='size-4 text-muted-foreground' />
          <span className='text-muted-foreground'>Option B</span>
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <CheckCircle2 className='size-4 text-muted-foreground' />
          <span className='text-muted-foreground'>Option C</span>
        </div>
      </div>
      <Button className='w-full h-8 text-xs' size='sm'>
        Cast Vote
      </Button>
    </Card>
  )
}
