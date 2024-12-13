import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const Comment = ({ identifier, title }) => {
  const disqusName = 'watchflix-net'

  const disqusConfig = {
    shortname: 'watchflix-net',
    config: { identifier, title },
  }

  return (
    <div className='my-5'>
      <DiscussionEmbed shortname={disqusName} config={disqusConfig} />
    </div>
  )
}

export default Comment;