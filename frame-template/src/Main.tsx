//
// Copyright 2022 DXOS.org
//

import React, { useState } from 'react';

import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material';

import { ObjectModel } from '@dxos/object-model';
import { useSelection } from '@dxos/react-client';
import { useFrameContext } from '@dxos/react-framekit';

export const Main = () => {
  // 1. Party and root item provided by the frame context from the host app.
  const { party, item } = useFrameContext();
  // 2. Select all task items as children of the root frame item.
  const tasks = useSelection(item?.select().children()) ?? [];
  const [value, setValue] = useState('');

  const handleAdd = () => {
    // 3. Create new task item as child of root frame item.
    void party!.database.createItem({
      model: ObjectModel,
      type: 'example:task',
      parent: item!.id,
      props: {
        value
      }
    });

    setValue('');
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ display: 'flex' }}>
        <TextField
          autoFocus
          fullWidth
          autoComplete='off'
          spellCheck={false}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && handleAdd()}
        />

        <Button onClick={handleAdd}>Add</Button>
      </Box>

      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <ListItemText primary={task.model.getProperty('value')} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
