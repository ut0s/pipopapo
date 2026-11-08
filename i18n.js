"use strict";

(() => {
  // Japanese source strings are the keys for the English translation catalog.
  const english = {
  "低い単音": "A low note",
  "中音の単音": "A mid note",
  "高い単音": "A high note",
  "上昇する2音": "Two rising notes",
  "下降する2音": "Two falling notes",
  "繰り返す2音": "Two repeated notes",
  "上昇する3音": "Three rising notes",
  "下降する3音": "Three falling notes",
  "3音の和音": "A three-note chord",
  "Previewボタンで試聴できます。別の音を選ぶと、再生中の音は停止します。": "Select Preview to listen. Choosing another sound stops the current preview.",
  "音声を再生できませんでした。もう一度Previewを押してください。": "Audio playback failed. Select Preview to try again.",

  "PipoPapoは、完了・入力待ち・失敗を音で知らせるCLI。Codex / Claude Code / Antigravity CLI / Hermes Agentと連携できます。": "PipoPapo is an audio notification CLI for completion, input requests, and failures. Integrates with Codex, Claude Code, Antigravity CLI, and Hermes Agent.",
  "電子音・口笛・9種類の通知音で、作業の変化をお知らせ。4つのエージェントと使える通知CLI。": "Beeps, whistles, and nine chimes for your workflow. An audio notification CLI for four agents.",
  "Homebrew配布はmacOS 13以降（Apple Silicon / Intel）向けです。": "Homebrew binaries are available for macOS 13 or later (Apple Silicon / Intel).",
  "v0.1.1 リリース ↗": "v0.1.1 release ↗",
  "Linux（x86_64）はソースからビルドできます。再生にはALSAと出力デバイスが必要です。": "Linux (x86_64) can be built from source. Playback requires ALSA and an output device.",
  "Antigravity CLI・Hermes Agent連携と通知音プリセットは、対応版CLIが必要です。公開済みv0.1.1には含まれません。": "Antigravity CLI, Hermes Agent, and chime presets require a CLI build with these features. They are not included in the published v0.1.1.",
  "通知の種類に、音を合わせる。": "Give each event its own sound.",
  "完了・入力待ち・失敗、ツールの開始・完了。それぞれの通知音をホストごとに保存できます。": "Save a sound per host for completion, input requests, failures, and tool start or completion.",
  "単音・2音・3音の、9種類。": "Nine chimes: one, two, or three notes.",
  "低・中・高の単音、上昇・下降・繰り返し、和音。本文に依存しない短い音で、状態を聞き分けられます。": "Choose low, mid, or high notes; rising, falling, or repeated tones; or a chord. These short chimes are independent of the message text.",
  "ツール通知は、必要なときだけ。": "Tool sounds when you want them.",
  "ツール開始・完了の通知は既定で無効です。start / complete / bothで選び、noneで戻せます。": "Tool start and completion sounds are disabled by default. Choose start, complete, or both; use none to turn them off.",
  "プリセットと設定の詳細 →": "Presets and settings →",
  "Homebrew配布はmacOS 13以降（Apple Silicon / Intel）向けです。導入後、短い本文を渡して試せます。": "Homebrew binaries support macOS 13 or later (Apple Silicon / Intel). After installing, try a short message.",
  "電子音または9種類のnotesプリセット": "Electronic audio or one of nine notes presets",
  "低・中・高の単音": "Low, mid, or high single note",
  "上昇・下降・繰り返しの2音": "Two rising, falling, or repeated notes",
  "上昇・下降・和音の3音": "Three rising or falling notes, or a chord",
  "notesは本文に依存しない固定音です。音量と再生時間の上限は適用されますが、telephone-mix / whistle-max / seedは音に影響しません。electronicで従来の電子音に戻せます。": "Notes presets are fixed sounds independent of the text. Volume and duration limits apply; telephone-mix, whistle-max, and seed do not affect them. Use electronic to restore electronic synthesis.",
  "通知ごとのプリセット設定": "Per-event preset settings",
  "未設定の通知は従来の電子音です。指定した項目だけを変更し、再セットアップでも保持します。ツール音にはtool-eventsの有効化が必要です。各ホストが対応するイベントに適用されます。": "Unset events use electronic audio. Only supplied settings change, and setup preserves them. Tool sounds require tool-events to be enabled. Presets apply to events supported by each host.",
  "完了": "Completed",
  "入力・承認待ち": "Input or approval required",
  "最終失敗": "Final failure",
  "ツール開始": "Tool start",
  "ツール完了": "Tool completion",
  "音": "Sound",
  "オプション": "Option",
  "用途": "Purpose",
  "setup / plugin install / plugin configureで保存できます。plugin hook / plugin notifyを直接呼ぶ場合は、同じ設定を引数で渡してください。": "Save these settings with setup, plugin install, or plugin configure. When calling plugin hook or plugin notify directly, pass the settings as arguments.",
  "で確認できます。このページは最新の実装を記載しています。配布版で利用できる引数は、インストール済みCLIのヘルプを確認してください。": ". This page describes the current implementation. Check the installed CLI help for options available in your release.",
  "ホストごとの通知": "Notifications by host",
  "Codexの最終失敗とHookで取得できない入力待ちはSkillから明示通知します。Antigravityは完全な待機状態で完了を通知し、ask_questionを入力待ちとして扱います。権限承認画面の自動通知には対応していません。Hermesは成功・最終失敗と質問・承認・sudo待ちを通知します。ツール単体の失敗は最終失敗として扱いません。": "Codex final failures and input requests missed by hooks use explicit skill notifications. Antigravity signals completion when fully idle and treats ask_question as an input request; it does not automatically notify permission dialogs. Hermes signals success, final failure, and question, approval, or sudo requests. Individual tool failures are not treated as final failures.",
  "表示言語": "Display language",
  "自動": "Auto",
  "紹介動画": "Watch PipoPapo in action",
  "PipoPapoの使い方を動画で紹介します。": "See how to use PipoPapo in this short demo.",
  "YouTubeで見る ↗": "Watch on YouTube ↗",
  "PipoPapoの紹介動画": "PipoPapo introduction video",
  "PipoPapoは、ターミナルの完了・入力待ち・失敗を電子音で知らせるCLI。Codex / Claude Codeと連携し、作業の変化を音で届けます。": "PipoPapo is a CLI that turns task completion, input requests, and failures into electronic sounds. Works with Codex and Claude Code.",
  "PipoPapo — ターミナルに、ちいさな声を。": "PipoPapo — A little voice for your terminal.",
  "電子音と口笛で、作業の変化をお知らせ。Codex / Claude Codeと使える通知CLI。": "Beeps and whistles for your workflow. An audio notification CLI for Codex and Claude Code.",
  "本文へ移動": "Skip to content",
  "PipoPapo ホーム": "PipoPapo home",
  "メインナビゲーション": "Main navigation",
  "音を聴く": "Listen",
  "コマンド": "Commands",
  "はじめる": "Get started",
  "ターミナルに、": "Give your terminal",
  "ちいさな": "a little ",
  "声": "voice",
  "を。": ".",
  "終わったよ。ちょっと見て。うまくいかなかった。": "All done. A little help? Something went wrong.",
  "画面の向こうの変化を、電子音と口笛でお知らせ。": "Hear what changed through beeps and whistles.",
  "PipoPapo は、あなたの作業に寄り添う通知CLIです。": "PipoPapo is a small notification CLI for your workflow.",
  "サウンドを試す": "Try the sounds",
  "導入について": "Installation",
  "Rust製 CLI": "Built in Rust",
  "ローカル音声合成": "Local audio synthesis",
  "電子音をイメージしたイラスト": "An illustration of an electronic sound device",
  "ことばの代わりに、ちょっとした音。": "A little sound, instead of words.",
  "コマンドひとつで、音のある作業へ。": "One command. A little more sound.",
  "どんな音？": "What does it sound like?",
  "まずは、聴いてみよう。": "Have a listen.",
  "おしゃべりなロボットのような電子音。": "Electronic sounds with a chatty robot feel.",
  "再生ボタンを押すと、サンプルが流れます。": "Press play to hear a sample.",
  "できたよ。": "All done.",
  "ひと仕事、完了。次へ進む合図に。": "One task finished. Your cue to move on.",
  "完了通知のサンプル": "Task completion sound sample",
  "お使いのブラウザーでは音声を再生できません。": "Your browser does not support audio playback.",
  "ちょっと、いい？": "Got a moment?",
  "あなたの入力や承認を待っているときに。": "A cue when your input or approval is needed.",
  "入力待ち通知のサンプル": "Input request sound sample",
  "あれ、困った。": "Something went wrong.",
  "失敗に気づいて、もう一度向き合う合図に。": "A little nudge to check what happened.",
  "失敗通知のサンプル": "Failure sound sample",
  "サンプルは同じCLIで生成した音です。イベント名そのものに専用の音色があるわけではなく、本文と設定で音が変わります。人の声で文章を読み上げる機能ではありません。": "These samples were generated with the same CLI. Events do not have fixed sound signatures: the text and settings determine the sound. This is not spoken text-to-speech.",
  "いつものコマンドに、": "Your usual commands,",
  "ひとさじの音を。": "with a little sound.",
  "短いメッセージを鳴らす。ビルドの完了を知らせる。": "Play a short message. Hear when a build finishes.",
  "WAVに書き出して、別の場所で使う。": "Export a WAV to use somewhere else.",
  "必要なときに、必要な音だけ。": "Just the sound you need, when you need it.",
  "コマンドの詳細・全オプションを見る →": "Full command reference and options →",
  "電子音・口笛・電話音をミックス": "Mix electronic tones, whistles, and telephone sounds",
  "音量と再生時間をコマンドで調整": "Set volume and duration with command options",
  "WAV生成は音声デバイスなしでも": "Export WAV without an audio device",
  "pppp say \"こんにちは\" \\\n    --volume 20 --max-duration 2": "pppp say \"Hello\" \\\n    --volume 20 --max-duration 2",
  "pppp render \"おつかれさま\" \\\n    -o hello.wav": "pppp render \"Nice work\" \\\n    -o hello.wav",
  "あなたの作業にも、": "A little PipoPapo",
  "ピポパポを。": "for your workflow.",
  "CLI名は": "The CLI is called ",
  "Pluginの導入も、ひとつのコマンドから。": "Set up the plugin with a single command.",
  "Homebrewで、手軽に。": "Install with Homebrew.",
  "Homebrewからインストールできます。": "Available through Homebrew.",
  "次のコマンドで、すぐに使いはじめられます。": "Run this command to get started.",
  "macOS 13以降、Apple Silicon / Intelに対応。": "macOS 13 or later. Apple Silicon and Intel.",
  "macOS 13以降、Apple Silicon / Intel、Linux（x86_64）に対応。": "macOS 13 or later (Apple Silicon/Intel), Linux (x86_64).",
  "v0.1.0 リリース ↗": "v0.1.0 release ↗",
  "エージェントと、いっしょに。": "At home with your agent.",
  "の導入後、使うホストを選んでセットアップ。": " installed? Choose your host to set up the plugin.",
  "セットアップ後はホストを再起動するか、新しいチャットを開始してHookを信頼してください。Codexの最終失敗通知はSkillから明示的に呼び出します。": "After setup, restart the host or start a new chat, then review and trust the hooks. Final failure notifications in Codex are sent explicitly by the skill.",
  "画面から目を離しても、": "Look away from the screen.",
  "作業とは、つながっていられる。": "Stay connected to your work.",
  "もう一度、聴いてみる ↗": "Listen again ↗",
  "ページの先頭へ ↑": "Back to top ↑",
  "PipoPapo (pppp) のコマンドリファレンス。say、notify、render、stop、doctor、setup、pluginの引数・オプション・使用例。": "The PipoPapo (pppp) command reference. Arguments, options, and examples for say, notify, render, stop, doctor, setup, and plugin.",
  "コマンドリファレンス — PipoPapo": "Command reference — PipoPapo",
  "はじめる ↗": "Get started ↗",
  "コマンドを、": "Your commands,",
  "もう少し詳しく。": "in a little more detail.",
  "ひとつ鳴らすところから、エージェントとの連携まで。": "From your first beep to agent integration.",
  "引数・設定・使用例をまとめました。": "Arguments, settings, and examples in one place.",
  "← 紹介ページへ戻る": "← Back to the overview",
  "コマンド目次": "Command contents",
  "コマンド一覧": "Command overview",
  "音の調整": "Audio options",
  "セッション・待機": "Sessions and scheduling",
  "plugin 管理": "Plugin management",
  "入力・終了コード": "Input and exit codes",
  "まずは、ひとつ鳴らしてみる。": "Start with a little sound.",
  "macOS 13以降、Apple Silicon / Intelに対応。Homebrewで導入したら、短い本文を渡して試せます。": "Supports macOS 13 or later on Apple Silicon and Intel. Install with Homebrew, then try a short message.",
  "macOS 13以降、Apple Silicon / Intel、Linux（x86_64）に対応。Homebrewで導入したら、短い本文を渡して試せます。": "Supports macOS 13 or later on Apple Silicon and Intel, and Linux (x86_64). Install with Homebrew, then try a short message.",
  "brew install ut0s/pipopapo/pppp\npppp say \"こんにちは\" --volume 20 --max-duration 2\npppp --help\npppp say --help": "brew install ut0s/pipopapo/pppp\npppp say \"Hello\" --volume 20 --max-duration 2\npppp --help\npppp say --help",
  "。本文から電子音・口笛・電話音を合成します。人の声で文章を読み上げる機能ではありません。": ". It synthesizes electronic tones, whistles, and telephone sounds from text, rather than reading the text aloud. ",
  "はヘルプ、": " shows help; ",
  "はバージョンを表示します。": " shows the version.",
  "コマンド・用途": "Command and purpose",
  "本文を電子音にして再生": "Play text as electronic sounds",
  "完了・入力待ち・失敗を通知": "Notify completion, input requests, or failure",
  "再生せずWAVを生成": "Generate a WAV without playback",
  "再生中・待機中の要求を停止": "Cancel active and queued requests",
  "音声出力とキューを診断": "Diagnose audio output and the queue",
  "Codex / Claude Code / Antigravity / Hermesへ同梱Pluginを導入": "Install the bundled plugin for Codex, Claude Code, Antigravity, or Hermes",
  "Pluginの設定・状態確認・削除・通知": "Configure, inspect, remove, or notify through the plugin",
  "以下の": "In the syntax below, ",
  "は値の置き場所です。実際の本文や識別子に置き換えてください。": " are placeholders. Replace them with your text, host, or identifiers.",
  "say — 本文を再生する": "say — Play a message",
  "引用符で囲んだ本文、または": "Provide either quoted text or ",
  "のどちらか一方で入力します。OSのデフォルト出力デバイスから再生し、再生終了まで呼び出し元は待機します。": " as input. Plays through the OS default audio device and waits until playback ends.",
  "pppp say \"処理が完了しました\" --volume 30 --max-duration 2\nprintf '%s' '長い返答の本文' | pppp say --stdin --session chat-1\npppp say \"最新の返答\" --session chat-1 --mode replace": "pppp say \"Task completed\" --volume 30 --max-duration 2\nprintf '%s' 'The full response' | pppp say --stdin --session chat-1\npppp say \"Latest response\" --session chat-1 --mode replace",
  "と": " and ",
  "セッション・待機制御": "Sessions and scheduling",
  "を指定できます。手動の": " are available. Manual ",
  "には通知の重複抑制やTTLを適用しません。": " does not use notification deduplication or TTL.",
  "notify — 状態を知らせる": "notify — Announce a state change",
  "イベントは次の3種類です。本文を省略すると既定の短文を電子音に変換します。イベントに固定の専用音色が割り当てられているわけではありません。": "Choose one of three events. If you omit the body, the default short message is converted into electronic sounds. Events do not have fixed sound signatures.",
  "EVENT・意味・既定の本文": "Event, meaning, and default body",
  "意味": "Meaning",
  "既定の本文": "Default body",
  "失敗": "Failed",
  "pppp notify completed --session build --target release\nprintf '%s' '承認してください' | pppp notify input-required --stdin --session chat-1\npppp notify failed --volume 25 --max-duration 2": "pppp notify completed --session build --target release\nprintf '%s' 'Please approve' | pppp notify input-required --stdin --session chat-1\npppp notify failed --volume 25 --max-duration 2",
  "専用オプション・既定値・動作": "Command-specific options, defaults, and behavior",
  "専用オプション": "Command-specific option",
  "既定値": "Default",
  "動作": "Behavior",
  "なし": "None",
  "イベントの既定文の代わりに標準入力の本文を使う": "Read the body from standard input instead of the default event message",
  "未指定": "Not set",
  "同一セッション・対象の古い待機通知を新しい状態で置き換える": "Replace older queued state notifications with the same session and target",
  "待機通知の有効期間（ミリ秒）。0で期限を無効化。再生開始後には適用しない": "Queued notification lifetime in milliseconds. 0 disables expiry. Does not apply after playback begins",
  "通知完了後の重複抑制期間（ミリ秒）。0でも待機中・再生中の同一通知は抑制": "Deduplication period after notification completion, in milliseconds. Even at 0, matching queued or active notifications are suppressed",
  "同一セッション・イベント・対象・本文の通知を重複抑制します。": "Suppresses duplicate notifications with the same session, event, target, and body. ",
  "待機制御": "Scheduling",
  "も使えます。": " are also available.",
  "render — WAVへ書き出す": "render — Export a WAV",
  "音声デバイスを開かず、48kHz・モノラル・32bit floatのWAVを生成します。本文か標準入力のどちらか一方を指定します。": "Generate a mono, 48 kHz, 32-bit float WAV without opening an audio device. Supply either text or standard input.",
  "pppp render \"おつかれさま\" -o hello.wav\npppp render --stdin -o message.wav < message.txt\npppp render \"通知音\" > notification.wav\npppp render \"更新した通知音\" -o hello.wav --force": "pppp render \"Nice work\" -o hello.wav\npppp render --stdin -o message.wav < message.txt\npppp render \"Notification\" > notification.wav\npppp render \"Updated notification\" -o hello.wav --force",
  "専用オプション・動作": "Command-specific options and behavior",
  "WAVの保存先。未指定ならバイナリWAVを標準出力へ出す": "WAV destination. If omitted, write binary WAV data to standard output",
  "指定した出力ファイルの上書きを許可。": "Allow overwriting the output file. Use with ",
  "と併用": ".",
  "既存ファイルは既定で保護されます。": "Existing output files are protected by default. ",
  "音声オプション": "Audio options",
  "を使えますが、セッションや待機制御は使いません。": " are supported; sessions and scheduling are not. With ",
  "によるリダイレクトはシェル自身がファイルを上書きするため、既存ファイルを保護したい場合は": ", the shell itself overwrites the file. To protect an existing file, use ",
  "を使ってください。": ".",
  "音の調整 — 共通オプション": "Sound settings — Shared options",
  "に共通です。コマンドごとに引数で指定し、これらのコマンドはPluginの保存設定を読みません。": " share these options. Pass them on each invocation; these commands do not read saved plugin settings.",
  "オプション・既定値・指定できる値・動作": "Options, defaults, and accepted values",
  "指定できる値・動作": "Accepted values and behavior",
  "0〜100。出力音量": "0–100. Output volume",
  "0〜100。電話音の混合率。100では電話音だけを合成": "0–100. Telephone sound mix. At 100, only telephone sounds are synthesized",
  "0〜100。発話ごとに抽選する口笛割合の上限。0で口笛を無効化": "0–100. Upper limit for the randomly selected whistle proportion per utterance. 0 disables whistles",
  "上限なし": "No limit",
  "有限の正数。発話全体を指定秒数で打ち切る。速度・音程は変更しない": "A finite positive number. Cut off the entire utterance at this many seconds without changing speed or pitch",
  "毎回生成": "Generated each time",
  "0〜4294967295の整数。同じ本文・音声設定の乱数選択を再現": "An integer from 0 to 4294967295. Reproduce random choices with the same text and audio settings",
  "pppp say \"処理が完了しました\" --volume 20 --whistle-max 0 --max-duration 2\npppp render \"サンプル\" --telephone-mix 30 --whistle-max 10 --seed 42 -o sample.wav\npppp render \"1234567890\" --telephone-mix 100 -o telephone.wav": "pppp say \"Task completed\" --volume 20 --whistle-max 0 --max-duration 2\npppp render \"Sample\" --telephone-mix 30 --whistle-max 10 --seed 42 -o sample.wav\npppp render \"1234567890\" --telephone-mix 100 -o telephone.wav",
  "セッションと待機制御": "Sessions and scheduling",
  "は同じユーザー・一時領域で複数プロセスの再生を直列化します。": " serialize playback across processes sharing the same user and temporary directory. ",
  "で関連する呼び出しをまとめます。省略した呼び出し同士は同じ範囲になるため、チャットやタスクを分ける場合は識別子を指定してください。": " groups related calls. Calls without a session share the same scope, so specify an ID to separate chats or tasks.",
  "--mode・動作": "Mode and behavior",
  "（既定）": " (default)",
  "順番に再生を待つ": "Wait for playback in order",
  "同じセッションの再生・待機を取り消して置き換える。他セッションの待機順は維持": "Cancel and replace playback and queued requests in the same session. Preserve the order of other sessions",
  "再生中または待機中の要求があると新しい要求をスキップ": "Skip the new request when a request is playing or queued",
  "pppp say \"最新の返答です\" --session chat-1 --mode replace\npppp notify completed --session chat-2 --mode drop": "pppp say \"Latest response\" --session chat-1 --mode replace\npppp notify completed --session chat-2 --mode drop",
  "stop — 再生と待機を停止する": "stop — Cancel playback and queued requests",
  "のどちらか一方が必須です。再生中・待機中の要求を取り消します。": " are mutually exclusive; specify exactly one. Cancels active and queued requests. ",
  "はユーザーの共有キュー全体が対象です。": " affects the user's entire shared queue.",
  "doctor — 音が出ないときに": "doctor — Diagnose missing audio",
  "オーディオ出力とプロセスキューを診断し、結果を標準エラー出力へ表示します。音が出ない場合はOSの出力先・音量も確認してください。通常の再生は標準出力を空のままにし、エラーや診断を標準エラー出力へ出します。": "Diagnose audio output and the process queue, reporting to standard error. Also check the OS output device and volume. Normal playback leaves standard output empty; errors and diagnostics go to standard error.",
  "setup — エージェントと連携する": "setup — Connect your coding agent",
  "は": " is ",
  "または": " or ",
  "（別名": " (alias ",
  "）、": "), ",
  "）。同梱Pluginと専用実行ファイルを配置し、ホストへ登録します。": "). Installs the bundled plugin and its dedicated executable, then registers it with the host. Equivalent to ",
  "と同じ操作です。ホストのCLIが必要です。": ". The host CLI must be installed.",
  "導入後はホストを再起動するか新しいチャットを開始し、Hookを確認・信頼してください。再セットアップは既存の保存設定を保持し、実行ファイルとPluginを更新します。設定変更・再導入は実行中のチャットを終えてから行ってください。": "After installation, restart the host or start a new chat, then review and trust the hooks. Running setup again preserves saved settings while updating the executable and plugin. Finish active chats before reconfiguring or reinstalling.",
  "完了・承認待ちなどをHookで通知します。Codexの最終失敗やHookで取得できない入力待ちは、Skillから明示通知します。すべての質問形式や失敗を自動検出するものではありません。": "Hooks notify completion, approval requests, and other supported events. Codex final failures and input requests not captured by hooks are notified explicitly by the skill. Not every question format or failure is detected automatically.",
  "plugin — 設定・状態・削除": "plugin — Settings, status, and removal",
  "サブコマンド・動作": "Subcommands and behavior",
  "サブコマンド": "Subcommand",
  "導入・再導入。": "Install or refresh. Equivalent to ",
  "と同じ": ".",
  "指定した設定だけを変更し、ホストのキャッシュを更新": "Change only the supplied settings and refresh the host's plugin cache",
  "配置先・保存設定・ホストのPlugin一覧をJSON表示": "Show installation paths, saved settings, and the host's plugin inventory as JSON",
  "このCLI管理のPlugin・専用Marketplace・既知の配置ファイルを削除": "Remove this CLI-managed plugin, its dedicated marketplace, and known installation files",
  "install / configure / setup の設定": "Settings for install / configure / setup",
  "オプション・初回の既定値・動作": "Options, initial defaults, and behavior",
  "初回の既定値": "Initial default",
  "Hook通知の有効・無効": "Enable or disable hook notifications",
  "音量（0〜100）": "Volume (0–100)",
  "電話音の混合率（0〜100）": "Telephone sound mix (0–100)",
  "口笛割合の上限（0〜100）": "Whistle proportion upper limit (0–100)",
  "有限の正数で再生時間を制限": "Limit playback to a finite positive number of seconds",
  "保存された時間制限を解除。": "Remove the saved duration cap. Cannot be combined with ",
  "と同時指定不可": ".",
  "再生待ちの制御": "Playback scheduling",
  "ツール開始・完了の追加通知。既定では追加通知なし": "Optional tool start and completion sounds. Disabled by default",
  "既存設定のうち、指定しなかった値は保持されます。": "Existing values are preserved for options you do not specify. ",
  "は保存設定の項目ではありません。定義が変わるとホストでHookの再信頼が必要になる場合があります。": " is not a saved setting. If hook definitions change, the host may ask you to trust them again.",
  "HermesはPythonアダプターと管理リンクを配置して有効化します。別プロファイルにはHERMES_HOMEと専用の--data-dirを指定し、以後の管理にも同じ値を使ってください。導入・削除後はゲートウェイを再起動してください。音声はゲートウェイ側で再生されます。": "Hermes uses a Python adapter and a managed symlink. For another profile, set HERMES_HOME and a separate --data-dir; use the same values for subsequent management commands. Restart the gateway after installation or removal. Audio plays on the gateway machine.",
  "管理コマンド共通の配置オプション": "Location options for management commands",
  "オプション・動作": "Options and behavior",
  "Pluginの保存先を変更。以後のconfigure / status / uninstallにも同じ値を指定": "Override the plugin data directory. Use the same value for subsequent configure / status / uninstall calls",
  "PATH上のcodex / claude / agy / hermesの代わりに使うホスト実行ファイル": "Use this host executable instead of codex, claude, agy, or hermes on PATH",
  "macOSの既定保存先は": "The default macOS data directory is ",
  "。Linuxは": ". On Linux, it is ",
  "があればその配下の": " overrides that default when set, using its ",
  "を使います。ホストごとに": " subdirectory. Each host uses a ",
  "を配置します。": " subdirectory. ",
  "はHookの信頼済み・スピーカー確認済みという状態までは保証しません。": " does not guarantee that hooks are trusted or speaker output has been verified.",
  "plugin notify / hook — 連携用の通知": "plugin notify / hook — Integration notifications",
  "はHookと抑制状態を共有する明示通知です。イベントは": " sends an explicit notification sharing suppression state with hooks. Events are ",
  "は必須です。": " is required. ",
  "で本文を渡せます。": " supplies the body.",
  "pppp plugin notify failed --session chat-1 --volume 20\nprintf '%s' '確認してください' | pppp plugin notify input-required --session chat-1 --stdin": "pppp plugin notify failed --session chat-1 --volume 20\nprintf '%s' 'Please check' | pppp plugin notify input-required --session chat-1 --stdin",
  "はホストからのイベントJSONを標準入力で受けるアダプターです。通常はセットアップで生成したHook定義から呼び出します。主なイベントは": " receives a host event JSON object on standard input. It is normally called by the hook definitions generated during setup. Main events: ",
  "、Claude向けに": "; Claude also supports ",
  "も扱います。": ".",
  "共通オプション・既定値・動作": "Shared options, defaults, and behavior",
  "共通オプション": "Shared option",
  "既定値・動作": "Default and behavior",
  "true。通知の有効・無効": "true. Enable or disable notifications",
  "共通の音声オプション": "shared audio options",
  "45。1〜45の整数。キュー待ち＋再生の合計上限": "45. An integer from 1 to 45. Total queue wait plus playback timeout",
  "通知用の実行ファイルを変更。通常は自身のpppp": "Override the notification executable. Normally the same pppp runtime",
  "これらは保存設定を直接読み込まず、呼び出し時の引数を使います。": "These commands use invocation arguments rather than reading saved settings. ",
  "の実行エラーは標準エラー出力へ報告し、ホストの処理を妨げないよう終了コード0と空JSON": " reports execution errors to standard error and returns exit code 0 with an empty JSON object ",
  "を返します。": " to avoid blocking the host. ",
  "本体の": " options ",
  "は、この連携用サブコマンドの引数ではありません。": " are not accepted by these integration subcommands.",
  "入力の制約と終了コード": "Input limits and exit codes",
  "本文はUTF-8で最大16KiBです。空白だけなら再生せず正常終了し、": "Input must be UTF-8, up to 16 KiB. Whitespace-only input exits successfully without playback; ",
  "では空のWAVを生成します。合成波形が256MiBを超える場合はエラーとなるため、必要に応じて": " produces an empty WAV. If the synthesized waveform would exceed 256 MiB, it fails. Use ",
  "を指定してください。": " when needed.",
  "コード・意味": "Code and meaning",
  "コード": "Code",
  "完了・停止・重複抑制・drop・期限切れ": "Completed, stopped, deduplicated, dropped, or expired",
  "引数エラー": "Invalid arguments",
  "オーディオ出力エラー。doctorで診断": "Audio output error. Run doctor for diagnostics",
  "キュー・一時状態のエラー": "Queue or temporary state error",
  "UTF-8・入力サイズ・合成・WAV入出力エラー。Plugin管理のファイル／ホストCLIエラーも含む": "UTF-8, input size, synthesis, or WAV I/O error. Also includes plugin management file or host CLI errors",
  "インストール済みの版に合わせた最新の引数は": "To see options for your installed version, run ",
  "で確認できます。このページはv0.1.0を対象としています。": ". This reference covers v0.1.0.",
  "queue。queue / replace / drop": "queue. queue / replace / drop",
  "none。none / start / complete / both": "none. none / start / complete / both",
  "、": ", ",
  "。": ". ",
  "、または": " or ",

};

  const requestedLanguage = new URL(location.href).searchParams.get("lang");
  const storageKey = "pipopapo-language";
  let preference = ["ja", "en", "auto"].includes(requestedLanguage) ? requestedLanguage : "auto";
  try {
    if (requestedLanguage === "auto") {
      localStorage.removeItem(storageKey);
    } else if (preference !== "auto") {
      localStorage.setItem(storageKey, preference);
    } else {
      const savedLanguage = localStorage.getItem(storageKey);
      if (savedLanguage === "ja" || savedLanguage === "en") preference = savedLanguage;
    }
  } catch {
    // The URL selection still works when browser storage is unavailable.
  }

  const chooseLanguage = () => {
    if (preference !== "auto") return preference;
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const language of preferred) {
      const base = String(language).toLowerCase().split("-")[0];
      if (base === "ja" || base === "en") return base;
    }
    return "en";
  };
  const initialLanguage = chooseLanguage();
  document.documentElement.lang = initialLanguage;
  if (initialLanguage === "en") document.documentElement.dataset.localizing = "";

  document.addEventListener("DOMContentLoaded", () => {
    // Retain the source strings so a browser language change can restore Japanese.
    const texts = [];
    const attributes = [];
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest("script, style")) continue;
      const key = node.nodeValue.trim();
      if (Object.prototype.hasOwnProperty.call(english, key)) {
        texts.push({ node, original: node.nodeValue, key });
      }
    }
    for (const element of document.querySelectorAll("[aria-label], [alt], [title], meta[content]")) {
      for (const name of ["aria-label", "alt", "title", "content"]) {
        const original = element.getAttribute(name);
        if (Object.prototype.hasOwnProperty.call(english, original)) {
          attributes.push({ element, name, original });
        }
      }
    }
    const videoSection = document.getElementById("video");
    const applyLanguage = () => {
      const language = chooseLanguage();
      document.documentElement.lang = language;
      for (const { node, original, key } of texts) {
        node.nodeValue = language === "en" ? original.replace(key, () => english[key]).replace(/^\s+([.,;:)])/, "$1") : original;
      }
      for (const { element, name, original } of attributes) {
        element.setAttribute(name, language === "en" ? english[original] : original);
      }
      if (videoSection) {
        const videoId = language === "ja" ? videoSection.dataset.videoJa : videoSection.dataset.videoEn;
        const player = videoSection.querySelector(".demo-video");
        const source = `https://www.youtube-nocookie.com/embed/${videoId}`;
        if (player.src !== source) player.src = source;
        player.hidden = false;
        videoSection.querySelector(".video-link").href = `https://www.youtube.com/watch?v=${videoId}`;
      }
    };
    try {
      applyLanguage();
      window.addEventListener("languagechange", applyLanguage);
      const languageSwitch = document.querySelector(".language-switch");
      if (languageSwitch) {
        const links = languageSwitch.querySelectorAll("a[data-language]");
        const updateLinks = () => {
          for (const link of links) {
            const url = new URL(location.href);
            url.searchParams.set("lang", link.dataset.language);
            link.href = url.href;
          }
        };
        languageSwitch.querySelector(`[data-language="${preference}"]`).setAttribute("aria-current", "true");
        updateLinks();
        window.addEventListener("hashchange", updateLinks);
        languageSwitch.hidden = false;
      }
    } finally {
      delete document.documentElement.dataset.localizing;
    }
  }, { once: true });
})();
