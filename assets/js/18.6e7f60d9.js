(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{639:function(n,s,a){"use strict";a.r(s);var t=a(7),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"autohotkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autohotkey"}},[n._v("#")]),n._v(" autohotkey")]),n._v(" "),a("p",[n._v("如果是经常使用Windows和osx系统的人，那么两种系统的不同的快捷键可能处于习惯经常按错，复制粘贴的逻辑不通，虽然可以正确在不通平台「拷贝」与「剪切」，但是 ctrl 与 command 不在一个键位，导致按错位置也是时有发生，\n使用vscode等编辑器时各种快捷键映射功能不一样，导致效率上升不了，如果忽略 Win 键盘上的 Ctrl 与 Mac 键盘上的 Command (⌘) 这两键键位不同这一点之外，操作逻辑大体一致，并且 Mac 上 Command (⌘) 组合键的位置更加顺手。AutoHotkey 是 Win 上一款非常强大的脚本工具，可以通过自定义的一个快捷键触发一系列的动作。")]),n._v(" "),a("p",[n._v("那么我们就有两种方案可以选择：")]),n._v(" "),a("ol",[a("li",[n._v("直接改变/对调键盘上 Ctrl 键的映射(个人不建议)")]),n._v(" "),a("li",[n._v("改变快捷键组合的关联\n比如你在键盘上按下 Win 键 + C，电脑可以自动识别成 Ctrl + C，但是单独按下 Win 键还是会出现开始菜单，并没有改变其原本独立的功能；")])]),n._v(" "),a("div",{staticClass:"language-ahk line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(";-----------------------------------------\n; Mac keyboard to Windows Key Mappings\n;=========================================\n; --------------------------------------------------------------\n; NOTES\n; --------------------------------------------------------------\n; ! = ALT\n; ^ = CTRL\n; + = SHIFT\n; # = WIN\n;\n; Debug action snippet: MsgBox You pressed Control-A while Notepad is active.\n#InstallKeybdHook\nSetTitleMatchMode 2\nSendMode Input\n; --------------------------------------------------------------\n; OS X system shortcuts\n; --------------------------------------------------------------\n!s::SendInput ^{s}\n!a::SendInput ^{a}\n!c::SendInput ^{c}\n!v::SendInput ^{v}\n!x::SendInput ^{x}\n!o::SendInput ^{o}\n!f::SendInput ^{f}\n!z::SendInput ^{z}\n!y::SendInput ^{y}\n!t::SendInput ^{t}\n!w::SendInput ^{w}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br")])]),a("h3",{attrs:{id:"开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机自启"}},[n._v("#")]),n._v(" 开机自启")]),n._v(" "),a("p",[n._v("把需要开机启动的脚本，放入 “启动” 文件夹即可。")]),n._v(" "),a("p",[n._v("目录：{C:\\Users\\username\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup}")]),n._v(" "),a("p",[n._v("Tips：\n修改脚本后需要重启 AHK，或右键菜单中 “重载脚本”；在设置时注意快捷键不要和系统默认快捷键冲突；编辑脚本时使用英文输入法；因为每运行一个脚本就会在任务栏显示一个图标，使用 ≥ 2 个脚本时，建议将其中内容合并到一个脚本文件中；可以通过 “想实现的功能描述 + ahk” 搜索需要脚本；")])])}),[],!1,null,null,null);s.default=e.exports}}]);