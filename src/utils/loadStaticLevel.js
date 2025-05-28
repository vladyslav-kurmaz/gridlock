
import { easy1 } from '../levels/easy/easy'
import { medium1 } from '../levels/medium/medium'
import { hard1 } from '../levels/hard/hard'
import { evil1 } from '../levels/evil/evil'

export const loadStaticLevel = (level) => {
  if (level === 'easy') {
    return easy1
  } else if (level === 'medium') {
    return medium1
  } else if (level === 'hard') {
    return hard1
  } else if (level === 'evil') {
    return evil1
  } else {
    return easy1
  }
}
