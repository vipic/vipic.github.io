const n="ui/index.md",e="post",t="ui",o=`
看完这本书后，我发现这并不是一本介绍专业设计原则的书，而更像是是一本具有实操的指导书：指导软件开发者从哪些角度以及用什么方法可以得到一个符合软件所需要功能的 UI，也指导设计从业者如何运用所学的设计知识来作出一个符合终端用户预期的软件页面。

本书的第一个观点就是 " 从功能开始，而不是布局 "。也颠覆了我过往的经历，之前我在做开发的时候，总是从 UI 开始，去一个设计集合的网站找哪个好看，然后把我想要的内容往这个 UI 上靠拢。可是实际情况是，应用软件是一系列功能的集合，将这些功能呈现给用户，才是设计的作用。

1. 降低复杂度，先使用灰度屏蔽掉颜色的干扰
	减少颜色使用灰度。因为没有了颜色，接下来的设计你不得不使用间距、对比度和大小来完成所有繁重的任务。
	这样过后你得到了一个清晰的界面，其具备明确的层次结构，便于以后通过颜色进行增强。
2. 不要过度设计，走一步设计一步
	通过循环来逐步迭代。design -> code -> design
	琐碎的细节太多了，可能会拖慢我们的脚步。尽早让真实的产品落地，避免在抽象的原型中过度想象。毕竟在前者的基础上一点一点打磨，比一次性想象出一个完整的作品更容易。
3. 保持悲观，和不要过渡设计有点类似，让 nice to have 的功能放在后面考虑
	假如你设计了一个评论系统，估计今后可能会用到上传功能，那么可以先不用考虑的太远，因为引入上传功能的话，就会涉及到额外的存储展示，会比单纯的评论复杂很多，而且不知道什么时候能够完成，那就不如先上线无需附件的版本
4. 找准自己的风格，应用是什么风格的，就使用什么样的设计，可以从字体，颜色，圆角
	**字体**
	优雅和专业的风格就使用有衬线的字体
	轻松活泼的风格就使用圆形无衬线的字体
	**颜色**
	这是一个很成熟的领域，遵循科学研究的结果就好了，金色代表昂贵并且有教养，粉色代表有趣不严肃等等
	**圆角**
	小的圆角表示中规中矩
	大的圆角代表活泼
	没有圆角给人一种严肃正式的感觉
	**语言措辞**
	较少个人化的语言会给人正式和专业的感觉
	亲切友好的语言就会给人更亲切的感觉
	词汇的选择可能会比字体和颜色对整体风格有更高的权重
大多数时候我们都是凭借自己的喜好来做设计的，如果不知道从何下手的话，可以想象一下会使用你的产品的人是什么样的，将自己应用的风格与他们贴近就好了。
借鉴竞争对手的风格是一个捷径，但是也会让你的作品看起来像是某个产品的次级版本。

## Limit your choices

颜色和字体就有成千上万种，这就可以让人困惑和犹豫了。

而且还有任何微小的设计，都可以让你花费很多时间来纠结。

例如字体大小、阴影颜色、头像大小、字重等等等等。

在没有限制的情况下做决策真是让人煎熬啊，在很多个结果里面选择哪个都没有错。这里给你一些参考：

> Define systems in advance(提前定义系统)

颜色选择上，提前选出 10 个 8 个的，然后从这里面来做选择。

字体也是列出一些字体，再将元素套进这套字体体系里面。

这样做只有首次的挑选这个体系的时候稍微花点精力，后续套用的时候都会省时省力。(原文减少决策疲劳)

> Designing by process of elimination

基于上面的提前预设一些列方案再做选择的设想。这里有一个更深入或者更可操作性的例子。

假如你想设置一个图标，看上去一个特定的像素比较合适，那么就使用这个像素大小连同它相邻的两外两个大小一起比较，如果还是它合适那最好，就是它了。如果它看起来不如另外一个合适，那么就取另外的那一个继续执行这个操作，直到找到合适的那个。

> Systematize everything

越来越多的内容被你系统化了，那么在决策的时候就越省力。

以下这些都是可以系统化的，

- Font size
- Font weight
- Line height
- Color
- Margin
- Padding
- Width
- Height
- Box shadows
- Border radius
- Border width
- Opacity
如果有其他情况让你开始纠结了，那就试试能不能也把它系统化处理。

本章节一个收尾

> You don’t have to define all of this stuff ahead of time, just make sure you’re approaching design with a system-focused mindset. Look for opportunities to introduce new systems as you make new decisions, and try to avoid having to make the same minor decision twice.

> Designing with systems is going to be a recurring theme throughout this book, and in later chapters we’ll talk about building a lot of these systems in finer detail.

### Hierarchy is Everything

## Not all elements are equal

Visual hierarchy refers to how important the elements in an interface appear in relation to one another, and it’s the most effective tool you have for making something feel “designed”.

视觉层次结构是指界面元素在彼此之间的重要性，它是使某物“设计感”得以体现的最有效工具。

When everything in an interface is competing for attention, it feels noisy and chaotic, like one big wall of content where it’s not clear what actually matters.

当界面中的所有元素都争夺注意力时，会感觉杂乱无序，就像一个充满内容的大墙，不清楚到底有什么是重要的。

## Size isn’t everything

当使用大小来做强调区分的时候，容易让次要的文字变得不容易阅读。

可以通过加粗需要强调的文字，或者通过调整次要文字颜色变得更淡一点来加强对比。

以下是原文的建议，

**Try and stick to two or three colors:**

• A dark color for primary content (like the headline of an article)

• A grey for secondary content (like the date an article was published)

• A lighter grey for tertiary content (maybe the copyright notice in a footer)

**Similarly, two font weights are usually enough for UI work:**

• A normal font weight (400 or 500 depending on the font) for most text

• A heavier font weight (600 or 700) for text you want to emphasize

## Don’t use grey text on colored backgrounds

白色背景下，次要文字改成浅灰色是比较好的方法。但是在深色背景下，浅灰色可能会和背景颜色相似其实是降低了对比度。使用透明度的做法也不是很合适，因为背景图案可能会透过文字若隐若现。不能用前面说的办法 lighter(降低颜色或者透明度都能做到) 来实现了，要手动选择一个次级且和背景搭配的颜色才行了。

## Emphasize by de-emphasizing

文中举了个 tab 的例子，所有 tab 文字起初都是深色，想要突出一个的话就很难表现，最终通过将其他非 active 的 tab 改成浅色文字，active 的用深色文字来实现。

另外一个例子是 form 表单提交以及 form 表单边上的一个引导步骤的页面。起初两个都有 card 包裹，没有主次只分，想要强调 form 没有好的办法，所以将引导步骤的 card 去掉了背景和边框，这样 form 就突出了。

![[./assets/de-emphasizing.png]]

## Labels are a last resort

通过 \`标签: 内容\` 这种格式来展现的内容，很难强调主次，都被这种结构给拉平了。

> You might not need a label at all

例如书中的例子，名片的展示。邮箱电话号码等元素大家已经达成了共识，不需要一个 \`邮箱\` 或者 \`电话\` 的标签才能知道这个数据是什么。所以可以将标签去掉，这样就可以将剩下的内容按照字重颜色等来强调了。

> Combine labels and values

在有些场景，需要标签来说明内容。这时去掉标签会导致内容不清晰。这时可以去掉标签改成说明文字。(确实 \`标签:内容\` 的形式，标签的存在会影响整体的设计)

![[./assets/CleanShot 2023-12-21 at 17.20.10.png]]

甚至可以去掉标签后增加 icon 来增强设计感

![[./assets/CleanShot 2023-12-21 at 17.20.49.png]]

> Labels are secondary

有的场景，标签又是必不可少。例如展示多个数据片段的仪表盘，就无法省去标签，也无法改成说明文字。这种情况，数据是主要内容，标签是为了提升清晰度，可以降低它的等级

![[./assets/CleanShot 2023-12-21 at 17.25.32.png]]

> When to emphasize a label

有哪个场景是需要强调标签的呢，例如体检报告。用户这个时候优先关注的是标签，然后才是标签对应的数据。找到 \`体重\` 这个标签的优先级会高于 \`86kg\`。这里也不能过分降低数据的等级，一般低一级就可以了，这个也是用户关心的。

## Separate visual hierarchy from document hierarchy

一般而言，在网页上 \`h1\` 到 \`h6\` 标签有特定的语义，而且会 \`h1\` 最大 \`h6\` 最小。这在文档型的网站上很有帮助，但是在应用程序界面中可能会促使一些错误决策。例如网页的面包屑组件，那里指示的是当前的页面信息，这个位置用 \`h1\` 标签非常合适，但是并不需要原始 \`h1\` 这么大，大概是一个标签的大小就可以了，要保证语义目的这里需要调整 \`h1\` 标签的大小，但是不能使用一个大小合适的 \`h6\` 标签。

保证选用元素的语义目的，这些做对的基础上，再调整视觉设计。

## Balance weight and contrast

粗的字体比常规字体有更大的表面积，所以看上去也更给人以强调的感觉

> Using contrast to compensate for weight

当 icon 和文字在一起的时候，特别是实心的 icon 会因上面表面积理论而看起来 icon 比文字更强调，这个时候要降低 icon 的等级，让整体看起来协调或者突出你所强调的内容。

> Using weight to compensate for contrast

例如 1px 边框，柔和的颜色会让它不那么明显，过重的颜色又让它太过明显。这个时候用 2px 的粗细搭配以柔和的颜色，看上去就很合适。

> Semantics are secondary

页面上应该只有一个主要的 action，少一点的次要 action，没有或者几乎没有更次要的 action。

Primary actions should be obvious.

遵守这个原则，就要让页面上强调的 action 只有一个，使用 solid， 高对比度的背景

Secondary actions should be clear but not prominent.

次要的按钮使用 outline 或者对比度低的背景

Tertiary actions should be discoverable but unobtrusive.

更次要的操作能够被用户发现，但是不应该打扰用户

例如这个页面

![Astro theme cactus logo](./c.png)

> Destructive actions

破坏性操作的按钮不一定要是大的红色粗体的样式，如果并非主要操作的情况下，破坏性操作的按钮建议还是使用 secondary or tertiary 的按钮。

只有破坏性操作的确认按钮，这种情况它是作为主要 action ，需要大红粗的样式。

## Layout and Spacing

### Start with too much white space

> One of the easiest ways to clean up a design is to simply give every element a little more room to breathe.

看上去是增加 padding 给其中的元素留出更多空间。

> White space should be removed, not added

具体执行手段是，先给予元素足够多个空间，再逐渐减少到你满意为止。

> Dense UIs have their place

如果设计仪表盘，那就不得不将信息压缩进一个屏幕能够展示得下为最好。而不能盲目的提供更多的空间了。

### Establish a spacing and sizing system

又提到了预设一组参数，然后从这一组里面来选。这种决策好于纠结 120px 还是 125px 这种。

> A linear scale won’t work

For a system to be truly useful, it needs to take into consideration the relative difference between adjacent values.

并非所有长度参数都用 4 的倍数就是好的，重要的是考虑相邻元素之间的差异。

在尺寸较小的情况下，几个像素的差别就能带来很大的变化。例如 16px 比 12px 大了 33%。

而尺寸较大的情况下，即便大像素差别，例如 500px 变到 520px，也只变化了 4%。

在这个 spacing and sizing system 中，想要决策变得容易，那就尽量让任意两个数值之间的变化大于 25%。

> Defining the system

上文提到的变化准则，通过上述操作减少人的决策消耗。那么在建立这个系统的时候怎样才能减少决策消耗呢。

使用一个合理的基础值，然后再用一个因子和倍数来构建一个比例尺。(factors and multiples)

16px 就是一个比较合理的基础数值。因为它能很好的被除尽，而且也是常用浏览器的默认字体大小。

![[./assets/CleanShot 2023-12-22 at 17.18.51.png]]

基于 16px 来做一个预设的话，它的倍数是 0.25 0.5 0.75 1 1.5 2 3 4 6 8 12 16 24 32 40 48 就比较合适，在较小的一端数字排列的比较紧密，随着尺寸的增加，也需要更多的空间。满足前面的相邻的值变化在 25% 以上。(虽然最后一个的变化是 20%，规矩是死的人是活的)

> Using the system

使用这个系统的时候，假如选择了一个间距发现还是小怎么办，那尝试下一个数值没准就可以了。例如前文的预设，使用 16px 还是小，那就试试 24px。

这样能花非常少的精力来决策，却带来了非常大的一致性。太酷了。

### You don’t have to fill the whole screen

不用为了适配现代设备的宽度而改变了你原有的设计。假如一个登录框是 600px，那就保持它 600px，边上使用空白填充没什么不好的。正文部分不填充全部也符合了人的阅读习惯，如果太长了人阅读换行也可能会犯错误。

但是导航和页脚充满屏幕是合理的。对不同的功能元素使用不同的策略。

## Shrink the canvas

假如在一个很大尺寸的屏幕上设计一个小的 UI 很难，那不妨尝试从小屏幕设计开始。例如 400px 以下的屏幕。这个完成之后再放大到大尺寸设备上，调整不协调的元素就好了，这样可能也不会调整太多。

## Thinking in columns

假如你的设计在窄屏幕下看上去不错，但是放到宽屏幕上就不协调了，也别着急调整间距等，试试将相关元素分组然后分列来渲染。保持一组还是原有的宽度，这样可能很快就平衡了。

## Don’t force it

就像不用非得充满整个屏幕一样，也没必要将所有东西塞进一个小区域。

### Grids are overrated

栅格系统很有用，但也没那么有用。

## Not all elements should be fluid

栅格系统是将屏幕等分基于百分比定义宽度的，有些内容并不适合百分比来定义。

假如 sidebar 和 content 的比例是基于栅格系统的 3:9，那整体变宽的时候，sidebar 继续变宽占用了无意义的过多的宽度，侵占了 content 的显示空间，这是不合理的。

向相反的方向缩小屏幕，sidebar 宽度会变得更小导致文字换行也是不合理的。

大多数情况 sidebar 取一个固定的宽度，其余的正文区域让他们自适应是比较好的。

像是推特，推文模块可以随着屏幕变化而变化，但是用户的头像却不能随着屏幕变大而变大，是吧。

## Don’t shrink an element until you need to

拿登录框举例子，固定 600px 是合理的，那就用固定宽度，直到屏幕宽度小于 600px 才让它可以缩小。在大屏幕上它也变大也没必要吧。

### Relative sizing doesn’t scale

使用 \`em\` 单位来处理标题和正文的关系在 pc 上可能很合适，例如正文 \`14px\` 标题是 \`2.5em\`。但是在手机上这种做法就会让标题过大。手机端上不同元素的差距尽量不要过大。

> Relationships within elements

这个 " 缩放不一定适合 " 的原则不仅适用于两个独立的元素，在一组元素组成的组件中也同样适合。例如一个按钮组件，按照预设写好字体大小和边距。缩放会造成一种奇怪的效果，因为按钮越大，边距也需要更多；按钮越小，边距就相应的更小。这个变化的范围是在这个同等变化的比例达不到的，大概字体放大了 1.5 倍，那边距可能放大 1.6 倍是合适的；字体缩小了 1.5 倍，边距缩小 1.6 倍是合适的。

### Avoid ambiguous spacing

当元素需要明确的被分割开来的时候，使用边框或者不同的背景颜色是一个好的选择。

假如不这么做，例如在一个标签在 input 上面的表格中，假如这个标签和 input 的间距与这个标签和上一个元素的边距一样，那么这个标签的归属感就看起来模糊不清。最好让它和上一个元素的边距大一些，这样很明显就能看出标签的归属。

小标题距离自己正文的边距要**小**，正文距离下一个小标题的边距要**大** ，这样能让人一眼看出标题和正文的归属。在原生 ul 和 li 组成的列表中，li 之间的距离要大于行高，才能让多行 li 的内容有清晰的边界。

类似推特的点赞数量和评论数量，icon 和后面的数字间距应该小，突出他们的同组关系。

## Designing Text

### Establish a type scale

给字体设计一个不同等级不同大小的预设，会在今后的过程中减少决策成本，并增加一致性。

可以按照下面来设计这样一个系统。

这里省略了书中的一些内容。书里提到的基于一个基础值和固定的比例缩小和放大来得到的字体。这样的做法会有以下两个问题：

1. 得到的数值并非整数，又因为不同浏览器对非整数的渲染策略，你可能会手动将非整数调整为整数。
2. 你可能需要两个数值之前的一个值，但是这个值不能使用同样的固定比例得到，那还是要手动插入。
基于这两个问题，我们设计字体大小系统的方案还是和前面一样，小字体的时候相邻的数值差值可以小，字体变大后差值就应该增大。(因为越大对越小的变化越不明显)

例如得到一套这个方案。12 14 16 18 20 24 30 36 48 60 72 这套大小体系。

> Avoid em units

使用 em 单位可能会让生成的字体大小脱离你最初预设的字体大小体系。

### Use good fonts

能够识别不同字体的差异可能会花上你几年的工夫。好在你不是吃这口饭的，只要保证以下就行了。

字体选择这里有点虚。这是我的建议

1. 使用系统预设的
2. 使用字重超过 5 个的
3. 标题和正文有对应的字体设计规则，遵守就是了
4. 使用大家都用的
5. 参考其他你喜欢的网站的
6. 提高审美，爱咋来咋来

## Play it safe

如果你的品味 OK，那么相信自己。如果没有信心，那么使用系统的预设吧。至少用户的系统里已经存在你需要的字体了。

\`\`\`
-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
\`\`\`

## Ignore typefaces with less than five weights

并不一定对，但是能够提供更多字重的字体肯定更看重细节和精心制作的。

这是一个你在选择字体时候的参考。

## Optimize for legibility

用于标题的字体通常具有更紧凑的字母间距和较短的小写字母（较短的 x 高度），而用于较小尺寸的字体则具有更宽的字母间距和较高的小写字母。

上面是一个通识，遵守这个准没错。

## Trust the wisdom of the crowd

实在不行就按 popular 排序，选择第一个结果。

## Steal from people who care

你喜欢的网站是什么字体，你就用什么。

## Developing your intuition

培养你的直觉。

### Keep your line length in check

根据情况让每行的字符数量不要太多，太多会影响阅读，至少换行的时候可能会找不到下一行。

## Dealing with wider content

即便有其他元素，也要限制段落宽度。

## Baseline, not center

## Line-height is proportional

> Accounting for line length

行高太低，行与行就太密，影响阅读。

> Accounting for font size

行高也和字体大小互相影响，字体太小，人眼睛很难快速准确的识别下一行，所以需要大行高，加强区分。

字体很大呢，例如标题这种大小，人眼睛对于这种大的字体的辨识其实还是可以的，如果这个时候行高还大，其实是不合理的。

## Not every link needs a color

在文本中为链接写一个特殊样式是很有必要的。例如段落中有一个跳转链接，这个链接呈现蓝色有下划线。

在类似应用 \`列表->详情\` 的场景下，详情的入口也是一个链接，这里没必要通过蓝色下划线突出它是一个链接。甚至次要链接也不用强调，通过 hover 加下划线就行。

## Align with readability in mind

你是 ltr 国家，那么居左对齐就行。

## Don’t center long form text

标题或者 block 中的些许文字居中可能表现很好。但是长文字，尽量避免。

如果多个 block 都是短小的文字，但是其中一个很长，破坏了上述长文字不居中的原则，那就把这个 block 的文字改少一点。

其实这里也很好的说明了 UI 不仅仅是样式的设计，和内容配合也是相辅相成，互相成就的。

## Right-align numbers

表格中数字元素居右。因为这样在数字有有效数字的情况下，右对齐能保证小数点在同一个位置，大致瞄一眼的情况下，这种布局非常容易。a lot easier to compare at a glance.

## Hyphenate justified text

可以通过 css 调整文字的对齐效果，避免一行文字过少，或者行尾空白过多等等问题。

## Use letter-spacing effectively

相信字体设计师的水平，尽量不调整字体间距。但以下场景可以酌情考虑。

> Tightening headlines

作为标题的时候，可以缩小字间距。看下图对比

![[./assets/CleanShot 2023-12-25 at 14.17.09.png]]

> Improving all-caps legibility

全大写做标题或者强调的时候，这里可以适当增加字间距，提升可读性。

作者提到字体设计的时候对字间距有针对句子形式进行了优化。优化是因为字体的高度多样化，在四线格中，有单独占一个格子的 a o e，也有占用下面两个格子的 g y ，也有占用上面两个格子的 b d，还有全格子 j。

但是全大写后高度一致了，紧凑的字间距会降低可读性。

## Working with Color

### Ditch hex for HSL

Hex 和 RGB 方案都会让相似的颜色在编码上看起来很大不同。

HSL 不会，它使用色调、饱和度、亮度三个参数来表示颜色。

Hue 表示色轮上的度数，0 度是红色、120 度是绿色、240 度是蓝色。

Saturation 是饱和度，在 0%(无色，看上去就是灰色) 和 100% 的范围。如果饱和度是 0 的话，色轮上的值也就无关紧要了。

Lightness 是亮度，在 0%(不亮，黑色) 到 100%(亮，白色) 的范围。

### You need more colors than you think

书上说通过类似 adobe 的色轮生成器生成的 5 个颜色不足以保证用这些颜色可以做一个很好的应用。

## What you actually need

通常构建一个真实的东西，需要远远多于 5 个颜色。对于你要准备的调色盘，请包括下面三个种类。

> Greys

不用从纯黑色开始，纯纯的黑色看起来会有点不自然。从一个深灰色开始，逐渐用均匀的间隔生成出一系列的灰色。

![[./assets/CleanShot 2023-12-25 at 14.41.30.png]]

> Primary color(s)

一个主色，需要 5-10 个色调

![[./assets/CleanShot 2023-12-25 at 14.43.45.png]]

> Accent colors

强调色，例如醒目的角标，或者警示确认弹窗。一般确认绿，警示红，提醒黄。

这些颜色也需要不同的色调。例如警示色可以使用最浅的那个来做背景，中间的亮色做按钮文案等。

当你有 'new' 或者什么推荐角标的时候，使用一个抓眼球的颜色也是属于强调色的范畴。

### Define your shades up front

别使用程序预设的 lighter 或者 darker，这样会让生成的颜色跳出你设定的范畴。相反应该初期将他们全部枚举出来。

## Choose the base color first

选择主色的标准是，选定一个颜色，它的不同色调用在按钮上，最适合当按钮的颜色就是主色。

## Finding the edges

基于主色，再选一个最深和最浅。通常最深的色调用做文字颜色，最浅的用作背脊颜色。

## Filling in the gaps

将最深、主色、最浅排序，可以尝试给中间空出渐进的颜色空白。使整体保证有 7 个或者 9 个，这样能够让主色保持完美居中。再使用一致的比例生成出其余的颜色。

## What about greys?

灰色是使用前述颜色中最深的文字颜色更深一点做最深，最浅颜色的背景颜色更浅一点做最浅。

同理生成 7-9 个颜色。

## It’s not a science

基于此方法生成的颜色可能在使用中确实需要微调，放心的去调就好了，相信自己的眼睛，但是别频繁的调整。

### Don’t let lightness kill your saturation

TODO 涉及到颜色部分，不是很理解颜色调整的东西。暂时放下这个

## Creating Depth

如何让元素看起来像是凸起来的，或者是凹陷下去的。接下来的内容会告诉你。

### Light comes from above

面板凸起的时候，上面的边缘会被光照射到更亮，下面的边缘照射不到更暗。我们大脑已经接受了这种模式，所以看到类似模式的物品，就会有相应的认知。

面板凹陷的时候，上面的边缘得不到光照射更暗，下面的边缘被照射到了更亮。

### Simulating light in a user interface

想要实现对应的效果，我们模拟对应的光照就好了。基于光所在的位置，和照射到元素形成的光影，简单的给与深色和亮色，就能实现一个很基础的版本。

### Don’t get carried away

别过分陷入到这里去，专业的设计师能够更好的还原。要想想你是不是。

## Use shadows to convey elevation

使用阴影来营造一个高度差，如果让用户感受到了高度差，那么距离用户更近，就会更吸引用户的注意力。

### Establishing an elevation system

和前面一样，你也需要为阴影形成一个包含多个预设的系统。

### Combining shadows with interaction

table 中拖动某行的时候，如果它有阴影就像是漂浮在其他元素的上面。按钮按压前后的不同阴影效果，能让用户感觉按钮确实按下去了。

> 使用阴影注意，需要考虑元素 z 轴的位置来生成阴影的样式，而不是反过来。

### Shadows can have two parts

用的网站的阴影看起来非常自然，你留心观察，它可能使用了两个阴影。

第一个阴影是很大很柔和，有较大的垂直偏移和模糊半径。它模拟光源直接照射物体投射的阴影。

第二个阴影很紧密黯淡，有较小的垂直偏移和模糊半径。它模拟了物品下方的阴影区域，即使环境光，也很难照射到这个地方。

![[./assets/CleanShot 2023-12-25 at 17.07.34.png]]

## Accounting for elevation

高度很高的情况下，阴影几乎不可见了而且模糊。高度低呢，阴影就会很明显和尖锐。

### Even flat designs can have depth

扁平化设计如何体现深度呢。

## Creating depth with color

一般来说，颜色越亮就感觉距离我们更近，而较暗的颜色给人以较远的感觉。

如果你想让该元素有凸起的感觉，就把颜色调的比背景要亮。反之就是凹陷的感觉。

而扁平设计和非扁平设计都可以应用这套颜色理论。只不过扁平设计里缺少了阴影等。

## Using solid shadows

使用没有模糊半径短而且垂直的阴影。

### Overlap elements to create layers

重叠元素，让用户感觉图层有深度。特别是半重叠设计。下面是三个例子。

![[./assets/CleanShot 2023-12-25 at 17.23.09.png]]

![[./assets/CleanShot 2023-12-25 at 17.23.21.png]]

![[./assets/CleanShot 2023-12-25 at 17.23.32.png]]

## Overlapping images

图片也可以重叠来体现深度。不过要注意的是，如果图片上加上一个 " 隐形边框 " 即和背景颜色一致的边框，效果会非常不错。

![[./assets/CleanShot 2023-12-25 at 17.26.42.png]]

## Working with Images

肯定是使用好的图片了，拍摄的好、设计的好、内容积极等字面意义上的好。

怎么才能获得好的图片呢，假如你不够专业的话。第一个，雇佣一个专业摄影师。第二个找一个高质量的图片素材提供商。

### Text needs consistent contrast

为了保证文字的阅读性。

假如背景本身杂乱无比，不论深色还是浅色的文字都无法达到很好的可阅读性怎么办。

1. 给图片加深色半透明蒙层，这样使用浅色的文字就 ok 了。hsla(0, 0%, 0%, 0.5) 的黑色半透明蒙层能够忽略背景图片的凌乱程度。
2. 降低图片对比度 (参数调整亮度增加，对比度降低)，形成过曝的效果，这样使用深色的文字也 ok 了。
3. 风格化图片 (原文说的是给图片上色)，降低对比度的方案，去色方案，正片叠底等方案。消除原有图片的杂乱感。
4. 文字添加阴影。

### Everything has an intended size

小尺寸的素材用在大尺寸的场景，可能会因为放大而失真。

## Don’t scale up icons

即便不会失真的 svg 矢量图，放大的过大也会因原本小尺寸的设计过度放大而缺少细节显得粗糙。

假如图标想要放大怎么办呢，适当增加一个大体积的背景 (但是图标不要放大)。

## Don’t scale down screenshots

full-size 的截图缩小到 70% 可能导致细节无法看清。原本 16px 的字体缩小到到 6px，那还怎么看啊。截图时候取小尺寸设备，展示一部分。

或者取截图中强调的那部分做放大镜处理 (只取这部分，通过圆形边框包裹，像是强调)。

再或者，将文案隐去，做成骨架图效果。

## Don’t scale down icons, either

不论是大图表缩小还是小图标放大，都会导致锯齿模糊等结果。那么大图标想应用到 favico.ico 场景怎么办。重新绘制一个简单版的会比较合适。

### Beware user-uploaded content

使用用户自主上传的素材的时候，要避免这些不可控度素材破坏我们的设计。

## Control the shape and size

渲染的时候统一尺寸

## Prevent background bleed

防止用户上传图片的颜色和使用场景的颜色混淆。可以通过一个内阴影，将用户的素材和你本身的设计隔离开。例如头像场景。

为什么不用边框呢，边框有固定的颜色，可能会与用户上传的图片颜色冲突。如果一定要使用边框的话，一个半透明的边框是一个可选方案。

## Finishing Touches

### Supercharge the defaults

增强默认状态。例如浏览器默认的 li 样式，默认的 select 样式，都是比较简单。

将 li 的点替换成图标。选择状态用你的 primery color，都是好的办法。

这里的方案还是偏增加可视化元素，例如 icon。增强对比的设计，强调要强调的元素。

### Add color with accent borders

想让自己的设计更有吸引力么，使用 accent color 加点小点缀。

![[./assets/CleanShot 2023-12-25 at 17.58.20.png]]

![[./assets/CleanShot 2023-12-25 at 17.59.41.png]]

### Decorate your backgrounds

前面的事项你都已经做到了，在不大幅改变这些还能通过设计背景来打破单调。

## Change the background color

像是表格的隔行不同颜色一样，也可以在你的元素上做类似的调整。

或者在这个颜色上做渐变效果。

## Use a repeating pattern

添加一些细微可重复的图案，这些图案也不用完全在整个背景上重复。在部分模块来重复就行。

## Add a simple shape or illustration

在部分背景上，装饰一些简单的图案。像是重复的小点点，重复的波浪线等。

### Don’t overlook empty states

在没有数据的情况下，给空白的状态一些预设或者对应处理方案，例如 " 去添加 "

如果上面有筛选 tab 的话，在没有数据的情况下，这些筛选也是无意义的，可以在没有数据的情况下将这些也隐藏起来。

## Use fewer borders

区分两个元素可以使用 border，但有时候使用 border 可能会让你的设计显得凌乱。后面会有一个去除 border 的方案

## Use a box shadow

如果想要突出的元素和背景很近，那么使用阴影让突出的元素与周围区分开来。

## Use two different background colors

就像表格的间隔行不同颜色。

在这种情况下，相邻的元素有了足够的区分度。那这里如果存在 border 的话，就可以去掉了。

## Add extra spacing

通过间距来区分元素是最简单的办法了。

### Think outside the box

select 可以是 box 样式，table 可以包含图标啦，不需要排序的可以把数值和单位放在一个单元格里面啦。太抽象了。没话找话。

## Leveling Up

太抽象了，如果文章中加入了太多的 " 你 " 字，就有点说教的意味了。

> Look for decisions you wouldn’t have made

> Look for decisions you wouldn’t have made
`,a={title:"Refactoring UI",description:"作者读了一本关于应用设计的书，并将自己的感想和书中内容写成了本篇笔记作者读了一本关于应用设计的书，并将自己的感想和书中内容写成了本篇笔记",publishDate:new Date(17048448e5),draft:!0,tags:["design","develop"]},i={type:"content",filePath:"/home/runner/work/blog/blog/src/content/post/ui/index.md",rawData:`
title: "Refactoring UI"
description: "作者读了一本关于应用设计的书，并将自己的感想和书中内容写成了本篇笔记作者读了一本关于应用设计的书，并将自己的感想和书中内容写成了本篇笔记"
publishDate: "10 Jan 2024"
tags: ["Design", "Develop"]
draft: true`};export{i as _internal,o as body,e as collection,a as data,n as id,t as slug};
