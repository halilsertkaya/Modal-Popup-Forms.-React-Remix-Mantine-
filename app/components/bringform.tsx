import React, { useState } from 'react';
import { Button, Grid, Select, Modal, Col, TextInput, Center, Checkbox, Group, NumberInput, Flex, RangeSlider } from '@mantine/core';
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

  /// Price slider updates.
  const [sliderValue, setSliderValue] = useState([Number(form.values.minPrice), Number(form.values.maxPrice)]);
  const [numberInputValue, setNumberInputValue] = useState(0); // veya başka bir varsayılan değer
  const handleSliderChange = (newValue: number[]) => {
    setSliderValue(newValue);
    setNumberInputValue(newValue[0]); // Slider'ın başlangıç değeri olarak ilk elemanı kullanabilirsiniz
  };
  const handleNumberInputChange = (newValue: string) => {
    setNumberInputValue(newValue === "" ? 0 : Number(newValue)); // Boş ise 0 olarak ayarla, değilse string'i number'a çevir
  };
  ///

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
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '5', value: '5' },
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' },
            { label: '25', value: '25' },
            { label: 'All', value: 'all' },
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
            { label: 'All', value: 'all' },
            { label: 'Gun', value: 'gun' },
            { label: 'Knife', value: 'knife' },
            { label: 'Glove', value: 'glove' },
            { label: 'Case', value: 'crate' },
            { label: 'Sticker', value: 'sticker' },
            { label: 'Sticker Capsule', value: 'stickerCapsule' },
          ]}
        />
      </Grid.Col>

                    {selectedType === 'gun' && (
            <>
            <Grid.Col span={6}>
              <Center>
              <Select
          label="Select Weapon"
          placeholder="All"
          {...form.getInputProps('weapon')}
          data={[
            { label: 'Awp', value: 'awp' },
            { label: 'Ak-47', value: 'ak47' },
            { label: 'Desert Eagle', value: 'desertEagle' },
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
            { label: 'Dragon lore', value: 'awpDragonlore' },
            { label: 'Redline', value: 'ak47Redline' },
            { label: 'Blaze', value: 'desertEagleBlaze' },
          ]}
        />

              </Center>
            </Grid.Col>
            <Grid.Col span={6}>

<Flex direction="column" align="center" ml="3rem" >
<span>Float range</span>
<RangeSlider 
value={[sliderValue[0], sliderValue[1]]} 
onChange={handleSliderChange} 
defaultValue={[Number(form.values.minPrice), Number(form.values.maxPrice)]} miw="20rem" 
/>

  <Flex
    direction="row"
    justify="center"
    gap="5rem"
    mt="8px"
    mb="2rem"
  >
    <NumberInput
      hideControls
      placeholder="0"
      value={sliderValue[0]}
      onChange={(newValue) => {
        setNumberInputValue(newValue === "" ? 0 : Number(newValue));
        setSliderValue([newValue === "" ? 0 : Number(newValue), sliderValue[1]]);
      }}
      max={Number(form.values.maxPrice)}
      min={Number(form.values.minPrice)}
      step={1}
      size="xs"
      mah="3px"
      styles={{
        input: {
          height: '12px',
          textAlign: 'center',
          width: '8rem',
        },
      }}
    />

    <NumberInput
      hideControls
      placeholder="1"
      value={sliderValue[1]}
      onChange={(newValue) => {
        setNumberInputValue(newValue === "" ? 0 : Number(newValue));
        setSliderValue([sliderValue[0], newValue === "" ? 0 : Number(newValue)]);
      }}
      max={Number(form.values.maxPrice)}
      min={Number(form.values.minPrice)}
      step={1}
      size="xs"
      styles={{
        input: {
          height: '2px',
          textAlign: 'center',
          width: '8rem',
        },
      }}
    />
  </Flex>
</Flex>

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
      </Group>
    </Checkbox.Group>
    </Center>
            </Grid.Col>
            </>
                    )}

                    {selectedType === 'knife' && (
<>
              
            <Grid.Col span={6}>
              <Center>
              <Select
          label="Select Weapon"
          placeholder="All"
          {...form.getInputProps('weapon')}
          data={[
            { label: 'Karambit', value: 'karambit' },
            { label: 'Bayonet', value: 'bayonet' },
            { label: 'Falchion', value: 'falchion' },
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
            { label: 'Fade', value: 'fade' },
            { label: 'Tiger Tooth', value: 'tigerTooth' },
            { label: 'Crimson Web', value: 'crimsonWeb' },
          ]}
        />

              </Center>
            </Grid.Col>
            <Grid.Col span={6}>

<Flex direction="column" align="center" ml="3rem" >
<span>Float range</span>
<RangeSlider 
value={[sliderValue[0], sliderValue[1]]} 
onChange={handleSliderChange} 
defaultValue={[Number(form.values.minPrice), Number(form.values.maxPrice)]} miw="20rem" 
/>

  <Flex
    direction="row"
    justify="center"
    gap="5rem"
    mt="8px"
    mb="2rem"
  >
    <NumberInput
      hideControls
      placeholder="0"
      value={sliderValue[0]}
      onChange={(newValue) => {
        setNumberInputValue(newValue === "" ? 0 : Number(newValue));
        setSliderValue([newValue === "" ? 0 : Number(newValue), sliderValue[1]]);
      }}
      max={Number(form.values.maxPrice)}
      min={Number(form.values.minPrice)}
      step={1}
      size="xs"
      mah="3px"
      styles={{
        input: {
          height: '12px',
          textAlign: 'center',
          width: '8rem',
        },
      }}
    />

    <NumberInput
      hideControls
      placeholder="1"
      value={sliderValue[1]}
      onChange={(newValue) => {
        setNumberInputValue(newValue === "" ? 0 : Number(newValue));
        setSliderValue([sliderValue[0], newValue === "" ? 0 : Number(newValue)]);
      }}
      max={Number(form.values.maxPrice)}
      min={Number(form.values.minPrice)}
      step={1}
      size="xs"
      styles={{
        input: {
          height: '2px',
          textAlign: 'center',
          width: '8rem',
        },
      }}
    />
  </Flex>
</Flex>

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
        <Checkbox value="★" label="★" />
        <Checkbox value="★ StatTrak™" label="★ StatTrak™" />
      </Group>
    </Checkbox.Group>
    </Center>
            </Grid.Col>
            </>
                    )}

                    {selectedType === 'glove' && (
                      <>
              
              <Grid.Col span={6}>
                <Center>
                <Select
            label="Select Weapon"
            placeholder="All"
            {...form.getInputProps('weapon')}
            data={[
              { label: 'Karambit', value: 'karambit' },
              { label: 'Bayonet', value: 'bayonet' },
              { label: 'Falchion', value: 'falchion' },
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
              { label: 'Fade', value: 'fade' },
              { label: 'Tiger Tooth', value: 'tigerTooth' },
              { label: 'Crimson Web', value: 'crimsonWeb' },
            ]}
          />
  
                </Center>
              </Grid.Col>
              <Grid.Col span={6}>

          <Flex direction="column" align="center" ml="3rem" >
          <span>Float range</span>
  <RangeSlider 
    value={[sliderValue[0], sliderValue[1]]} 
    onChange={handleSliderChange} 
    defaultValue={[Number(form.values.minPrice), Number(form.values.maxPrice)]} miw="20rem" 
  />

            <Flex
              direction="row"
              justify="center"
              gap="5rem"
              mt="8px"
              mb="2rem"
            >
              <NumberInput
                hideControls
                placeholder="0"
                value={sliderValue[0]}
                onChange={(newValue) => {
                  setNumberInputValue(newValue === "" ? 0 : Number(newValue));
                  setSliderValue([newValue === "" ? 0 : Number(newValue), sliderValue[1]]);
                }}
                max={Number(form.values.maxPrice)}
                min={Number(form.values.minPrice)}
                step={1}
                size="xs"
                mah="3px"
                styles={{
                  input: {
                    height: '12px',
                    textAlign: 'center',
                    width: '8rem',
                  },
                }}
              />

              <NumberInput
                hideControls
                placeholder="1"
                value={sliderValue[1]}
                onChange={(newValue) => {
                  setNumberInputValue(newValue === "" ? 0 : Number(newValue));
                  setSliderValue([sliderValue[0], newValue === "" ? 0 : Number(newValue)]);
                }}
                max={Number(form.values.maxPrice)}
                min={Number(form.values.minPrice)}
                step={1}
                size="xs"
                styles={{
                  input: {
                    height: '2px',
                    textAlign: 'center',
                    width: '8rem',
                  },
                }}
              />
            </Flex>
          </Flex>
  
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

              </>
                    )}

                    {selectedType === 'crate' && (
      <Grid.Col span={12}>
        <Select
          label="Case"
          placeholder="Select Case"
          {...form.getInputProps('crate')}
          data={[
            { label: 'Glove Case', value: 'gloveCase' },
            { label: 'Spectrum Case', value: 'spectrumCase' },
            { label: 'Prisma 2 Case', value: 'prisma2Case' },
          ]}
        />
      </Grid.Col>
                    )}

                      {selectedType === 'sticker' && (
                      <Grid.Col span={12}>
        <Select
          label="Sticker"
          placeholder="Select Sticker"
          {...form.getInputProps('sticker')}
          data={[
            {
              label: 'Sticker | Titan (Holo) | Katowice 2014',
              value: 'Sticker | Titan (Holo) | Katowice 2014',
            },
            {
              label: 'Sticker | iBUYPOWER (Holo) | Katowice 2014',
              value: 'Sticker | iBUYPOWER (Holo) | Katowice 2014',
            },
            {
              label: 'Sticker | Vox Eminor (Holo) | Katowice 2014',
              value: 'Sticker | Vox Eminor (Holo) | Katowice 2014',
            },
          ]}
        />
                      </Grid.Col>
                    )}
                    {selectedType === 'stickerCapsule' && (
                      <Grid.Col span={12}>

<Select
          label="Sticker Capsule"
          placeholder="Select Sticker Capsule"
          {...form.getInputProps('crate')}
          data={[
            { label: 'Paris 2023 Legends Capsule', value: 'p23legends' },
            { label: 'Paris 2023 Contenders Capsule', value: 'p23contenders' },
          ]}
        />
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