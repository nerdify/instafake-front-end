import {Field, Form, Formik} from 'formik'
import React from 'react'
import {graphql} from 'react-relay/hooks'
import {useMutation} from 'react-relay-mutation'
import {useNavigate} from 'react-router-dom'
import {object, string} from 'yup'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Textarea,
} from '@chakra-ui/react'

import {CreatePostCreatePostMutation} from './__generated__/CreatePostCreatePostMutation.graphql'

const validationSchema = object({
  text: string().required(),
})

export function CreatePost() {
  const navigate = useNavigate()
  const [createPostCommit] = useMutation<CreatePostCreatePostMutation>(graphql`
    mutation CreatePostCreatePostMutation($input: CreatePostInput!) {
      createPost(input: $input) {
        post {
          id
          user {
            username
          }
        }
      }
    }
  `)

  function handleSubmit(values) {
    createPostCommit({
      uploadables: {
        photos: values.photos,
      },
      variables: {
        // @ts-expect-error
        input: {
          text: values.text,
        },
      },
      onCompleted: () => {
        navigate(`/`)
      },
    })
  }

  return (
    <div>
      <Heading size="md">Create Post</Heading>

      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={{
          text: ``,
          photos: [],
        }}
      >
        {({setFieldValue, values}) => (
          <Form>
            <Box>
              <Field name="text">
                {({field, meta}) => (
                  <FormControl
                    isRequired
                    isInvalid={meta.touched && meta.error}
                  >
                    <FormLabel>Description</FormLabel>
                    <Textarea {...field} />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="photos">
                {({field, meta}) => (
                  <FormControl
                    isRequired
                    isInvalid={meta.touched && meta.error}
                  >
                    <FormLabel>Photo</FormLabel>
                    <input
                      multiple
                      type="file"
                      onChange={(e) => {
                        // field.onChange(`photo`)(e.target.files[0])
                        setFieldValue(`photos`, [
                          ...values.photos,
                          ...Array.from(e.target.files),
                        ])
                      }}
                    />
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Box>

            <Button colorScheme="green" type="submit">
              Create post
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
