import React, { useState } from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { listOfEvents } from '../../pages/delegate/events';

function EventsOfInterest() {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box display="flex" justifyContent="center">
      <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {listOfEvents.map((event) => {
          const labelId = `checkbox-list-secondary-label-${listOfEvents.indexOf(event)}`;
          return (
            <ListItem
              key={event.title}
              secondaryAction={(
                <Checkbox
                  edge="end"
                  onChange={handleToggle(event)}
                  checked={checked.indexOf(event) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              )}
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`${event.altText}`}
                    src={`${event.image}`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${event.title}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default EventsOfInterest;
