(ns website-helpers.all-data)

(def notes
  [{:path-categories #{"Visual Art"}}]
  :path
  "content/docs/visual-art/generative-art.md"
  :backlinks
  #{"content/docs/visual-art/inspiration-and-resources.md"}
  :title
  "Generative Art"
  :markdown
  "---\nbacklinks-set: #{\"content/docs/visual-art/inspiration-and-resources.md\"}\ncategories-set: #{\"Visual Art\"}\ntesting: frontmatter\n---\n\n# Generative Art\n\n## Inspiration\n\nI was originally inspired to work on generative art after viewing this blog:\nhttps://beesandbombs.tumblr.com/. I find it fun to try to imagine how each of\nthese gifs were generated - each one is like a visual puzzle.\n\nSee more inspiration [here]({{< relref \"/docs/visual-art/inspiration-and-resources.md\" >}}).\n\n## My Art\n\nClick on each piece to see it in motion!\n\n[![double helix](/docs/visual-art/double-helix.png)](/docs/visual-art/double-helix-unindexed)\n\n<figure>\n  <a href=\"/docs/visual-art/perlin-flow-unindexed\">\n    <img src=\"/docs/visual-art/perlin-flow.png\" alt=\"perlin flow\"/>\n  </a>\n  <figcaption><small>Note this was done from a tutorial - it's not an original!</small></figcaption>\n</figure>\n\nSource code for the above gifs can be found at\nhttps://github.com/kovasap/generative-art.\n\n<a href=\"https://github.com/kovasap/geometrical_gifs/blob/master/encircle.gif\">\n  <img src=\"/docs/visual-art/encircle.png\" alt=\"encircle\" style=\"width:300px;\"/>\n</a>\n\nSource code for the above gif can be found at\nhttps://github.com/kovasap/geometrical_gifs.\n\nAn even older project can be found at\nhttps://github.com/kovasap/perspective_words. This project was made while doing\nmolecular simulation research, and arranges virtual atoms so that they spell\nout works when looked at from certain angles.\n\n## Ideas to Try\n\n### Sound\n\nAdd music/sound to BeesAndBombs-type visualizations like\n[ChaosDoodle](https://www.youtube.com/watch?v=vcBn04IyELc) videos."
  :name
  "generative-art.md"
  :categories
  #{"Visual Art"}
  :dir?
  false
  :links
  ["/docs/visual-art/inspiration-and-resources.md"
   "/"
   "/docs/visual-art/inspiration-and-resources.md"]
  :size
  1682
  :modtime
  1754257409
  :mode
  420
  :modification-unix-timestamps
  [1754257539
   1753934894
   1669743672
   1668204865
   1655753252
   1655753185
   1655657180
   1653846065
   1649286357
   1642463614
   1632246553
   1631990398
   1631653235]
  {:path-categories #{"Visual Art"}
   :path "content/docs/visual-art/inspiration-and-resources.md"
   :backlinks #{"content/docs/visual-art/generative-art.md"}
   :title "Inspiration And Resources"
   :markdown
   "---\nbacklinks-set: #{\"content/docs/visual-art/generative-art.md\"}\ncategories-set: #{\"Visual Art\"}\n---\n# Inspiration and Resources\n\nCool art and art tutorials that I've stumbled across.\n\n## Wallpapers\n\n - https://desktopography.net/\n - https://wallpapercave.com/pc-4k-macro-wallpapers\n\n## Tutorials\n\n - Awesome pixel art walkthroughs: https://www.slynyrd.com/blog\n\n## Tools and Art Generators\n\n - Map generators (designed for games):\n   - https://www.dungeonalchemist.com/\n   - https://dungeondraft.net/\n - https://github.com/mxgmn/WaveFunctionCollapse\n - https://github.com/mxgmn/MarkovJunior\n\n## Misc Projects\n\n - https://beesandbombs.tumblr.com/\n - https://oimo.io/works\n - https://emoji.supply/kitchen/\n - https://pokemon.alexonsager.net/\n\n## Natural Inspiration\n\n - https://images.wur.nl/digital/collection/coll13/search"
   :name "inspiration-and-resources.md"
   :categories #{"Visual Art"}
   :dir? false
   :links ["/" "/docs/visual-art/generative-art.md"]
   :size 866
   :modtime 1754018613
   :mode 420
   :modification-unix-timestamps [1753934894
                                  1712860286
                                  1668204865
                                  1659113492
                                  1659025169
                                  1655753252
                                  1655753185
                                  1655657180
                                  1654138836
                                  1653846065
                                  1652818831
                                  1649439956]}
  {:path-categories #{"Visual Art"}
   :path "content/docs/visual-art/judging-art.md"
   :backlinks nil
   :title "Judging Art"
   :markdown
   "---\nbacklinks-set: \ncategories-set: #{\"Visual Art\"}\n---\n# Judging Art\n\nHow can you tell what art is high quality and/or worth consuming?\n\n## Reviews\n\nGood, but can be biased by competing interests.\n\n\n## Meaning\n\nIt would be cool to ask many people to give a ranked list of the 50 most\nmeaningful experiences in their lives. From this, you could extract art entries\nand rank them by their occurrence, which would probably give a good list of\nwhat is worth experiencing yourself.\n\nhttps://www.pewforum.org/2018/11/20/where-americans-find-meaning-in-life/ is\nan interesting place to start here."
   :name "judging-art.md"
   :categories #{"Visual Art"}
   :dir? false
   :links ["/"]
   :size 597
   :modtime 1754018613
   :mode 420
   :modification-unix-timestamps
   [1753934894 1655753252 1655753185 1655657180 1653846065 1631653235]})
  
