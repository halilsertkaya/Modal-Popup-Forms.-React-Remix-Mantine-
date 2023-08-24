import React from 'react';
import { Button, Grid, Select, Modal, Col, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function BringFromModal({ closeModal }: { closeModal: () => void }) {
  const form = useForm({
    initialValues: {
      proxy: '1',
      page: '1',
      sort: 'pasc',
      type: '',
      minPrice: '0',
      maxPrice: '1000',
    },
  });

  const handleSubmit = (values: Record<string, string>) => {
    // Form gönder
  };

  return (
<Modal opened={true} size="lg" title="Test Form" onClose={closeModal}>
  <form onSubmit={form.onSubmit(handleSubmit)}>
    <Grid gutter="lg">
      <Grid.Col span={12}>
        <Select
          label="Choose Proxy"
          placeholder="Pick One Proxy"
          {...form.getInputProps('proxy')}
          data={[
            { value: '1', label: 'Proxy #1', group: 'Available' },
            { value: '2', label: 'Proxy #2', group: 'Busy', disabled: true },
          ]}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextInput
            type="number"
            label="Min Price"
            placeholder="Min Price"
            {...form.getInputProps('minPrice')}
            style={{ marginRight: '1rem' }}
          />
          <TextInput
            type="number"
            label="Max Price"
            placeholder="Max Price"
            {...form.getInputProps('maxPrice')}
          />
        </div>
      </Grid.Col>

      <Grid.Col span={12}>
        <Select
          label="Max Scrape Page"
          placeholder="Select Page Number"
          {...form.getInputProps('page')}
          data={[
            { value: '1', label: '1' },
            { value: '2', label: '2' }
          ]}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <Select
          label="Sort The Listing By"
          placeholder="By"
          {...form.getInputProps('sort')}
          data={[
            { value: 'nasc', label: 'Name ASC' },
            { value: 'ndesc', label: 'Name DESC' },
            { value: 'pasc', label: 'Price ASC' },
            { value: 'pdesc', label: 'Price DESC' }
          ]}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <Select
          label="Select The Type"
          placeholder="Select The Type"
          {...form.getInputProps('type')}
          data={[
            { value: 'Rifle', label: 'Rifle' },
            { value: 'Knife', label: 'Knife' },
            { value: 'Glove', label: 'Glove' },
            { value: 'Sticker', label: 'Sticker' },
          ]}
        />
      </Grid.Col>

      <Grid.Col span={12} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={closeModal} color="gray">
          Close
        </Button>
        <Button type="submit" form="bring-form" variant="filled">
          Submit
        </Button>
      </Grid.Col>
    </Grid>
  </form>
</Modal>
  );
}