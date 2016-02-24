var ConversationList = React.createClass({
  render: function() {
    var that = this
    return (
      <div className="flexbox-columns">
        {this.props.conversations.map(function(conversation, index){
          return <ConversationListItem conversation={conversation} key={index} selectedConversationId={that.props.selectedConversationId} />;
        })}
        <div className="end-of-messages">
          <p>End of messages</p>
        </div>
      </div>
    )
  }
})