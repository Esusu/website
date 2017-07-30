import React from 'react'
import { Flex, Box } from 'grid-styled'

import {
  Form,
  FormTitle,
  FormSubheading,
  FormField,
  Input } from '../atoms/form'

function InviteForm() {
  return (
    <Form>
      <Flex>
        <Box>
          <FormTitle></FormTitle>
          <FormSubheading>Get app download link sent to your phone</FormSubheading>
          <Flex justify="flex-start">
            <Box width={1/3} >
              <FormField>
                <Input type="email" placeholder="Enter your email address" name="email" />
              </FormField>
            </Box>
            <Box width={2/3}>
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

export default InviteForm
