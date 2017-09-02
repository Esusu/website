import React from 'react'
import { Flex, Box } from 'grid-styled'

import {
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input } from '../atoms/form'

function InterestForm() {
  return (
    <Form action="//today.us13.list-manage.com/subscribe/post?u=4eeeaa948fad6530a9283e8ad&amp;id=243259a704" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <Flex>
        <Box>
          <FormTitle>Android User?</FormTitle>
          <FormSubheading>Get notified when we finish developing our android app.</FormSubheading>
          <FormField>
            <Input type="email" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Enter your email address" required/>
          </FormField>
          <Flex justify="space-between">
            <Box>
              <FormField>
                <Input type="text" placeholder="First Name" name="FNAME" class="" id="mce-FNAME"/>
              </FormField>
            </Box>
            <Box>
              <FormField>
                <Input type="text" placeholder="Last name" name="LNAME" class="" id="mce-LNAME" />
              </FormField>
            </Box>
          </Flex>
          <Flex justify="flex-end">
            <Box width={1/2}>
              <FormField>
                <Input type="submit" value="Request Invite" />
              </FormField>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Form>
  )
}

export default InterestForm
