(function() {var implementors = {};
implementors["grpc_etcd"] = ["impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/split/struct.ReadHalf.html\" title=\"struct tokio_io::split::ReadHalf\">ReadHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/split/struct.ReadHalf.html\" title=\"struct tokio_core::io::split::ReadHalf\">ReadHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/buf/reader/struct.Reader.html\" title=\"struct bytes::buf::reader::Reader\">Reader</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/buf/trait.Buf.html\" title=\"trait bytes::buf::buf::Buf\">Buf</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-tls/0.1/tokio_tls_api/struct.TlsStream.html\" title=\"struct tokio_tls_api::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for TlsStream&lt;S&gt;","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/miow/0.1/x86_64-pc-windows-msvc/miow/pipe/struct.AnonRead.html\" title=\"struct miow::pipe::AnonRead\">AnonRead</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/miow/0.1/x86_64-pc-windows-msvc/miow/pipe/struct.AnonRead.html\" title=\"struct miow::pipe::AnonRead\">AnonRead</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"https://docs.rs/miow/0.1/x86_64-pc-windows-msvc/miow/pipe/struct.NamedPipe.html\" title=\"struct miow::pipe::NamedPipe\">NamedPipe</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/miow/0.1/x86_64-pc-windows-msvc/miow/pipe/struct.NamedPipe.html\" title=\"struct miow::pipe::NamedPipe\">NamedPipe</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
