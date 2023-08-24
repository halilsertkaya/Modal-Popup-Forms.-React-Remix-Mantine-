import React, { useState } from 'react';
import { Button, Grid, Select, Modal, Col, TextInput, Center, Checkbox, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function BringFromModal({ closeModal }: { closeModal: () => void }) {
  const form = useForm({
    initialValues: {
      proxy: '1',
      page: '1',
      sort: 'pasc',
      type: 'Gun',
      minPrice: '0',
      maxPrice: '1000',
      weapon: '',
      skin: '',
      patternid: '',
    },
  });

  const [selectedType, setSelectedType] = useState('');
  
  const handleSubmit = (values: Record<string, string>) => {
    // Form gönder
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
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
              value={selectedType}
              onChange={(value) => {
                if (value !== null) {
                handleTypeChange(value);
                form.reset();
                }
              }}
          data={[
            { value: 'Gun',     label: 'Gun'     },
            { value: 'Knife',   label: 'Knife'   },
            { value: 'Glove',   label: 'Glove'   },
            { value: 'Crates',  label: 'Crates'  },
            { value: 'Sticker', label: 'Sticker' },
          ]}
        />
      </Grid.Col>

                    {selectedType === 'Gun' && (
            <>
            <Grid.Col span={6}>
              <Center>
              <Select
          label="Select Weapon"
          placeholder="All"
          {...form.getInputProps('weapon')}
          data={[
            { value: 'AK-47'   , label: 'AK-47'   },
            { value: 'AWP'     , label: 'AWP'     },
            { value: 'M4A1-S'  , label: 'M4A1-S'  },
            { value: 'USP-S'   , label: 'USP-S'   }
          ]}
        />
              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>

              <Select
          label="Select Skin"
          placeholder="All"
          {...form.getInputProps('skin')}
          data={[
            { value: 'Doppler'       , label: 'Doppler'       },
            { value: 'Gamma Doppler' , label: 'Gamma Doppler' },
            { value: 'Night'         , label: 'Night'         },
            { value: 'Case Hardened' , label: 'Case Hardened' }
          ]}
        />

              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                
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

              </Center>
            </Grid.Col>
            <Grid.Col span={6}>
              <Center>
                

              <TextInput
            type="number"
            label="Pattern ID"
            placeholder="Pattern ID"
            {...form.getInputProps('patternid')}
          />

              </Center>
            </Grid.Col>
            <Grid.Col span={12}>
<Center>
            <Checkbox.Group
      defaultValue={['react']}
      label="Select Category"
      description="Categories:"
      withAsterisk
    >
      <Group mt="xs">
        <Checkbox value="Normal" label="Normal" />
        <Checkbox value="Souvenir" label="Souvenir" />
        <Checkbox value="StatTrak™" label="StatTrak™" />
        <Checkbox value="★" label="★" />
        <Checkbox value="★ StatTrak™" label="★ StatTrak™" />
      </Group>
    </Checkbox.Group>
    </Center>
            </Grid.Col>
            </>
                    )}

                    {selectedType === 'Knife' && (
                      <Grid.Col span={12}>
                      Knife Special inputs.
                      </Grid.Col>
                    )}

                    {selectedType === 'Glove' && (
                      <Grid.Col span={12}>
                      Glove Special inputs.
                      </Grid.Col>
                    )}

                    {selectedType === 'Crates' && (
                      <Grid.Col span={12}>
      <Grid.Col span={12}>
        <Select
          label="Select Case"
          placeholder="Case#No"
          {...form.getInputProps('sort')}
          data={[
            { value: 'Case#1', label: 'Case#1' },
            { value: 'Case#2', label: 'Case#2' }
          ]}
        />
      </Grid.Col>
                      </Grid.Col>
                    )}

                    {selectedType === 'Sticker' && (
                      <Grid.Col span={12}>
                      Sticker Special inputs.
                      </Grid.Col>
                    )}

      <Grid.Col span={12} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={closeModal} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
          Close
        </Button>
        <Button type="submit" form="bring-form" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
          Submit
        </Button>
      </Grid.Col>
    </Grid>
  </form>
</Modal>
  );
}