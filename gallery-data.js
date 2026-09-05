/*
  GALLERY PHOTO LIST
  ===================
  This is the only file you need to touch to add, remove, or reorder photos
  in the gallery. Each line below is one design card on the site.

  EASIEST WAY TO ADD A PHOTO:
  Open add-photo.html (double-click it, no internet needed) — fill in the
  title and shade, drop in your photo, and it hands you a ready-to-paste
  line plus the image file to drop in the photos/ folder. Paste that line
  in below and you're done.

  DOING IT BY HAND INSTEAD:
  1. Put your photo in the photos/ folder (e.g. photos/chrome-french.jpg).
  2. Copy one of the lines below and edit it:
       title  -> whatever you want shown under the photo
       family -> one of: nude, berry, chrome, sunset, emerald, red
       tag    -> a short description (e.g. "Ombré · Gel")
       img    -> "photos/yourfile.jpg"
  3. Save this file and refresh index.html to see it.

  To remove a photo, delete its whole line. Order here is the order it
  shows in the gallery.
*/

var designs = [
  { id:1, title:'Sunset Ombré Fade', family:'sunset', tag:'Ombré · Gel', bg:'linear-gradient(160deg,#F2A65A,#E8794A 55%,#B0193F)' },
  { id:2, title:'Milk Bath Ombré with Floral Accent', family:'nude', tag:'Ombré · Hand-painted accent', img:'photos/milk-bath-floral-accent.jpg' },
  { id:3, title:'Mirror Chrome', family:'chrome', tag:'Chrome powder', bg:'linear-gradient(160deg,#EDEBEF,#ABA6AE 55%,#7A7681)' },
  { id:4, title:'Emerald Marble', family:'emerald', tag:'Hand-painted', bg:'linear-gradient(160deg,#2E8367,#1F5C4A 60%,#123B30)' },
  { id:5, title:'Berry Swirl', family:'berry', tag:'Swirl art', bg:'linear-gradient(160deg,#9A3F68,#7A2048 55%,#4A1129)' },
  { id:6, title:'Classic Lacquer Red', family:'red', tag:'Glossy gel', bg:'linear-gradient(160deg,#D6335A,#B0193F 60%,#75082A)' },
  { id:7, title:'Nude Cat-Eye', family:'nude', tag:'Cat-eye', bg:'linear-gradient(160deg,#E7CBB2,#C99A75)' },
  { id:8, title:'Lilac Chrome Fade', family:'chrome', tag:'Chrome · Ombré', bg:'linear-gradient(160deg,#D9C9E0,#ABA6AE 55%,#8B7F97)' },
  { id:9, title:'Deep Berry Ombré', family:'berry', tag:'Ombré', bg:'linear-gradient(160deg,#B0577E,#7A2048 60%,#39101F)' }
];
