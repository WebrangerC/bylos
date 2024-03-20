---
up: "[[BYLOS_MOC]]"
created: 2024-03-11
day: " Monday"
completed: 
published: 
updated: 
due: 
effort: 
importance: 1
urgency: 1
state: publish
tags:
  - "#target-activity"
i_code_f-a:
---

A recent addition that I'm experimenting with is  my "What I touched Today" and "What I touched THIS WEEK" queries. At the end of the day, I can quickly see what I'd worked with, and decide if any of it needs to be filed, scheduled or discarded (*"Now that I do know it I shall do my best to forget it."*  - Sherlock Holmes, A Study in Scarlet). 

I am continually surprised at the number if items I've touched.

This works in Daily Notes titled:  YYYY-MM-DD
>[!atom]+ What I touched today
>```dataview
>LIST
>WHERE file.mday=date(this.file.name)
>```

``` code
>[!note]+ What I touched today
>```dataview
>LIST
>WHERE file.mday=date(this.file.name)
>```
```

This works in Weekly Notes titled:  YYYY-"w"WW_MMM
>[!atom]+ What I touched this week
>```dataview
>Table split(split(this.file.name,"-w")[1],"_")[0] AS "week"
>FROM -"~Calendar"
>WHERE string(file.mday.year) = split(this.file.name, "-w")[0]  AND string(file.mday.weekyear) = split(split(this.file.name,"-w")[1],"_")[0]
>```

``` code
>[!note]+ What I touched this week
>```dataview
>Table split(split(this.file.name,"-w")[1],"_")[0] AS "week"
>FROM -"~Calendar"
>WHERE string(file.mday.year) = split(this.file.name, "-w")[0]  AND string(file.mday.weekyear) = split(split(this.file.name,"-w")[1],"_")[0]
>```
```


