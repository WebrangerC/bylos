---
tags: []
state: state/develop
started: 2022-07-18
published: 2022-07-23
---
keywords:: #-kw/habit

Habits can be good (brush your teeth every morning/evening) or bad(looking at stock market results daily). I've got those two and a bunch more, but I'm trying to overbalance on the "good habit" side.  It should be no surprise that I'm using Obsidian.md to help. My current effort is the attempt to stay active in the three [[+About Focus|Focuses]] driving my LifeOS. I have added a little tracker to my Daily Note:
![[2022-07-24_Habits-1.png]]
which I summarize in my Weekly Note.
![[2022-07-24_Habits-2.png]]
with this dataviewjs block
```
const resetHours = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  return newDate;
  };

const endOfLastWeek = dv.current().date-dv.duration("1 day");
const beginOfNextWeek = dv.current().date+dv.duration("7 day");

const currentWeek = dv
  .pages('#dailynote AND -"90-Bins"')
  .where((b) => new Date(b.file.name) > endOfLastWeek)
  .where((b) => new Date(b.file.name) < beginOfNextWeek)
  .sort((b) => b.date);

   dv.table(["Date 📆", "Focus Growth", "Focus Home-Life", "Focus Profession"],
     currentWeek
     .sort((b) => b.file.name)
     .map(b => [b.file.name, b["growth-time"], b["home-life-time"], b["profession-time"]])
   )
```

My goal is to balance my time by [[2022-07-24_Habitualizing|reviewing]] how I'm spending my life on a weekly basis.

**Note**: I've recently seen an article on a fancier habit tracker that can be found [here](https://beingpax.medium.com/how-to-create-a-habit-tracker-in-obsidian-youll-actually-use-9094eeac1af6). I haven't tried it, but its another example of others in the community scratching their own itches and sharing their work.

(2022-07-23)